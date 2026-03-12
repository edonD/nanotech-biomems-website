"use client";

import LoadingSequence from "./components/LoadingSequence";
import MouseSpotlight from "./components/MouseSpotlight";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import ImpactStrip from "./components/ImpactStrip";
import Technology from "./components/Technology";
import Fabrication from "./components/Fabrication";
import WhyNow from "./components/WhyNow";
import Product from "./components/Product";
import Applications from "./components/Applications";
import Validation from "./components/Validation";
import Market from "./components/Market";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LoadingSequence>
      <main className="relative">
        <MouseSpotlight />
        <ParticleBackground />
        <Navbar />
        <Hero />
        <Problem />
        <ImpactStrip />
        <Technology />
        <Fabrication />
        <WhyNow />
        <Product />
        <Applications />
        <Validation />
        <Market />
        <About />
        <Contact />
        <Footer />
      </main>
    </LoadingSequence>
  );
}
