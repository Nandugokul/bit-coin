import FirstCryptoSection from "../../components/cryptoSection-1/FirstCryptoSection";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import NavBar from "../../components/ui/NavBar";

function LandingPage() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <FirstCryptoSection />
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
