import Accordion from "../../components/accordion/Accordion";
import Carousel from "../../components/carousel/Carousel";
import FirstCryptoSection from "../../components/cryptoSection-1/FirstCryptoSection";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import NavBar from "../../components/ui/NavBar";
import SingleCarouselCard from "../../components/ui/SingleCarouselCard";

function LandingPage() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <FirstCryptoSection />
        <Carousel />
        <Accordion />
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
