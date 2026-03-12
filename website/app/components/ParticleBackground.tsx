"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
  type: "dot" | "hex" | "cross";
  pulsePhase: number;
}

const COLORS = [
  "6,214,242",   // cyan
  "0,255,136",   // green
  "59,130,246",  // blue
  "139,92,246",  // purple
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const count = Math.max(25, Math.min(100, Math.floor(window.innerWidth / 18)));
      particles = Array.from({ length: count }, () => {
        const types: Particle["type"][] = ["dot", "dot", "dot", "hex", "cross"];
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          opacity: Math.random() * 0.25 + 0.08,
          type: types[Math.floor(Math.random() * types.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        };
      });
    };

    const drawHex = (x: number, y: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + r * Math.cos(angle);
        const py = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawCross = (x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x - r, y);
      ctx.lineTo(x + r, y);
      ctx.moveTo(x, y - r);
      ctx.lineTo(x, y + r);
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Pulse effect
        const pulse = Math.sin(time * 0.001 + p.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = p.opacity + pulse * 0.08;

        ctx.globalAlpha = currentOpacity;

        if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},1)`;
          ctx.fill();
        } else if (p.type === "hex") {
          drawHex(p.x, p.y, p.radius * 2.5);
          ctx.strokeStyle = `rgba(${p.color},0.7)`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (p.type === "cross") {
          drawCross(p.x, p.y, p.radius * 2);
          ctx.strokeStyle = `rgba(${p.color},0.6)`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw molecular bonds
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${particles[i].color},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            // Double bond for close particles
            if (dist < 60) {
              const nx = dy / dist * 2;
              const ny = -dx / dist * 2;
              ctx.beginPath();
              ctx.moveTo(particles[i].x + nx, particles[i].y + ny);
              ctx.lineTo(particles[j].x + nx, particles[j].y + ny);
              ctx.strokeStyle = `rgba(${particles[i].color},${alpha * 0.5})`;
              ctx.stroke();
            }
          }
        }
      }

      animFrame = requestAnimationFrame(animate);
    };

    const handleMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    initParticles();
    animFrame = requestAnimationFrame(animate);

    const handleResize = () => { resize(); initParticles(); };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-bg" aria-hidden="true" />;
}
