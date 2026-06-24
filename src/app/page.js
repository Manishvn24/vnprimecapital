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
import WhatsAppFloat from "@/components/common/Whatsappflot"


const page = () => {
  return (
      <div>
      <Navbar2/>
      <Hero />
      <BankLogoTicker />
      <LoanServices />
      <WhyChooseUs />
      <WhoWeServe/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default page