import logo from "../../assets/ImagesAndIcons/SVG/bitNowLogo.svg";
import facebookIcon from "../../assets/ImagesAndIcons/SVG/facebookIcon.svg";
import instagramIcon from "../../assets/ImagesAndIcons/SVG/instagramIcon.svg";
import twitterIcon from "../../assets/ImagesAndIcons/SVG/twitterIcon.svg";
import rightArrow from "../../assets/ImagesAndIcons/SVG/rightArrowIcon.svg";
import arrowDownIcon from "../../assets/ImagesAndIcons/SVG/arrowDown.svg";
import globeIcon from "../../assets/ImagesAndIcons/SVG/globeIcon.svg";
import "./Footer.css";
function Footer() {
  return (
    <footer className="mt-40 footerSection">
      <div className="px-32 border-b-2 border-[#D7F5FF0A] pb-11">
        <div className=" flex justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <img src={logo} alt="logo" className="mb-2" />
              <small>
                Lorem Ipsum, jhdjnfnj <br />
                Htehiuijnerv
              </small>
            </div>
            <div className="flex space-x-8">
              <img src={facebookIcon} alt="facebook" />
              <img src={instagramIcon} alt="instagram" />
              <img src={twitterIcon} alt="twitter" />
            </div>
          </div>
          <div>
            <h6 className="font-semibold mb-8">Other Pages</h6>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Home</a>
              </div>
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>About Us</a>
              </div>

              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Services</a>
              </div>
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Token Sale</a>
              </div>
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Contact</a>
              </div>
            </div>
          </div>
          <div>
            <h6 className="font-semibold mb-8">Quick Links</h6>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Privacy Policy</a>
              </div>
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Term Of Service</a>
              </div>

              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Disclaimer</a>
              </div>
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>Credits</a>
              </div>
              <div className="flex space-x-2">
                <img src={rightArrow} alt="arrow" />
                <a>FAQ</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-80">
            <h6 className="font-semibold mb-8 ">NewsLetter</h6>
            <p className="mb-6">
              At habitant maecenas lacus adipiscing non. Accumsan etiam non
              praesent
            </p>
            <input
              className="p-3 rounded-lg mb-4"
              type="text"
              placeholder="Your email adress"
            />
            <button className="text-[#002B45] font-semibold bg-primaryColor p-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-32 items-center justify-between pt-4 pb-8">
        <div className="flex items-center">
          <img src={globeIcon} alt="globe" />
          <small className="me-10 ms-3">Cestina</small>
          <img src={arrowDownIcon} alt="arrow" />
        </div>
        <div className="space-x-7">
          <small>Privacy Policy</small>
          <small>Notice at Collection</small>
          <small>Terms</small>
          <small>Copyright © 2023 Atlassian</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
