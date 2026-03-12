const puppeteer = require("puppeteer");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const SCREENSHOTS_DIR = path.join(__dirname, "..", "screenshots");
const PORT = 3099;

async function waitForServer(url, maxRetries = 30) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("Server did not start");
}

async function main() {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  // Start dev server
  console.log("Starting Next.js dev server...");
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: __dirname,
    stdio: "pipe",
  });

  server.stderr.on("data", (d) => process.stderr.write(d));

  try {
    await waitForServer(`http://localhost:${PORT}`);
    console.log("Server ready.");

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    // Desktop screenshots
    const desktopPage = await browser.newPage();
    await desktopPage.setViewport({ width: 1920, height: 1080 });
    await desktopPage.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2000)); // Wait for hero animations

    // Desktop viewport-only (hero) - before scrolling
    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-hero.png"),
    });
    console.log("Desktop hero screenshot taken.");

    // Scroll through the page to trigger all InView animations
    const sections = ["problem", "impact", "technology", "whynow", "product", "applications", "about", "contact"];
    for (const section of sections) {
      await desktopPage.evaluate((id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "instant" });
      }, section);
      await new Promise((r) => setTimeout(r, 1500)); // Wait for animations to play
    }

    // Scroll back to top for full-page screenshot
    await desktopPage.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 500));

    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-full.png"),
      fullPage: true,
    });
    console.log("Desktop full-page screenshot taken.");

    // Section screenshots (animations already triggered)
    for (const section of sections) {
      try {
        const element = await desktopPage.$(`#${section}`);
        if (element) {
          await element.screenshot({
            path: path.join(SCREENSHOTS_DIR, `desktop-${section}.png`),
          });
          console.log(`Desktop ${section} screenshot taken.`);
        }
      } catch (e) {
        console.log(`Could not screenshot ${section}: ${e.message}`);
      }
    }

    // Mobile screenshots
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844 });
    await mobilePage.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2000));

    // Scroll through on mobile too to trigger animations
    for (const section of sections) {
      await mobilePage.evaluate((id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "instant" });
      }, section);
      await new Promise((r) => setTimeout(r, 1000));
    }
    await mobilePage.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 500));

    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-full.png"),
      fullPage: true,
    });
    console.log("Mobile full-page screenshot taken.");

    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-hero.png"),
    });
    console.log("Mobile hero screenshot taken.");

    await browser.close();
    console.log("All screenshots saved to screenshots/");
  } finally {
    server.kill();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
