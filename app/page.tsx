// app/page.tsx
"use client";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Referrals from "./components/Referrals";
import { referralsData } from "./data/referrals";



export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
        <main className=" max-w-7xl mx-auto">
          <Banner />
          <Education />
          <Projects />
          <Referrals referrals={referralsData}/>
        </main>
        <Footer />
      </div>
    </>
  );
}
