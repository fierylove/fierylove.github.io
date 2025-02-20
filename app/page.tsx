"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Referrals from "./components/Referrals";
import { referralsData } from "./data/referrals";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-in-out",
      once: true, // Animation happens only once when scrolled into view
    });
  }, []);

  return (
    <div className="bg-primary">
      <Navbar />
      <main className="">
        <Banner />
        <Education />
        <Projects />
        <Referrals referrals={referralsData} />
      </main>
      <Footer />
    </div>
  );
}
