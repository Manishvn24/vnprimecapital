import BankPartners from "./(Home)/BankPartners"
import Contact from "./(Home)/Contact"
import Footer from "./(Home)/Footer"
import Hero from "./(Home)/Hero"
import LoanServices from "./(Home)/LoanServices"
import Process from "./(Home)/Process"
import Stats from "./(Home)/Stats"
import Testimonials from "./(Home)/Testimonials"
import WhoWeServe from "./(Home)/WhoWeServe"
import WhyChooseUs from "./(Home)/WhyChooseUs"
import SplashCursor from "@/components/SplashCursor"
const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <SplashCursor
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.08}
        CURL={2}
        SPLAT_RADIUS={0.12}
        SPLAT_FORCE={4000}
        COLOR_UPDATE_SPEED={8}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#2563EB"
      />

      <div className="relative z-10">
        <Hero />
        <Stats />
        <WhoWeServe />
        <LoanServices />
        <BankPartners />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default Home