import Accordion from "../../components/accordion/Accordion";
import Carousel from "../../components/carousel/Carousel";
import FirstCryptoSection from "../../components/cryptoSection-1/FirstCryptoSection";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import NavBar from "../../components/ui/NavBar";
import "./LandingPage.css";
function LandingPage() {
  return (
    <>
      <div className="landingPage overflow-hidden">
        <NavBar />
        <div className="firstBg">
          <HeroSection />
          <FirstCryptoSection />
          <Carousel />
        </div>
        <div className="secondBg">
          <Accordion />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default LandingPage;
