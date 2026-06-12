"use client"
import BankLogoTicker from "@/components/(Home)/BankPartner"
import Contact from "@/components/(Home)/Contact"
import Footer from "@/components/(Home)/Footer"
import Hero from "@/components/(Home)/Hero"
import TimelineStepper from "@/components/(Home)/Progress"
import LoanServices from "@/components/(Home)/Services"
import Testimonials from "@/components/(Home)/Testimonials"
import WhoWeServe from "@/components/(Home)/WhoWeServe"
import WhyChooseUs from "@/components/(Home)/WhyChooseUs"
import Navbar from "@/components/common/Navbar"
import { Navbar2 } from "@/components/common/Navbar2"
import SplashCursor from "@/components/common/SplashCursor"


const page = () => {
  return (
      <div>
      <SplashCursor
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.08}
        CURL={2}r
        SPLAT_RADIUS={0.12}
        SPLAT_FORCE={4000}
        COLOR_UPDATE_SPEED={8}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#2563EB"np 
      />
      <Navbar2/>
      <Hero />
      <BankLogoTicker />
      <LoanServices />
      <WhyChooseUs />
      <WhoWeServe/>
      <TimelineStepper/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default page