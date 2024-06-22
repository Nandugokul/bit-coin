import "./HeroSection.css";
import cursor from "../../assets/ImagesAndIcons/SVG/cursorIcon.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  useGSAP(() => {
    const tlMain = gsap.timeline({ repeat: -1 });

    // Timeline for .sustainableGrowthContainer
    const tlSustainable = gsap.timeline({ repeat: -1 });
    tlSustainable
      .to(".sustainableGrowthContainer", {
        x: 100,
        duration: 1,
      })
      .to(".sustainableGrowthContainer", {
        delay: 1,
        x: 0,
        y: -150,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".sustainableGrowthContainer", {
        delay: 1,
        x: -100,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".sustainableGrowthContainer", {
        delay: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      });

    // Timeline for .comprahensiveSupportContainer
    const tlSupport = gsap.timeline({ repeat: -1 });
    tlSupport
      .to(".comprahensiveSupportContainer", {
        x: -100,
        duration: 1,
      })
      .to(".comprahensiveSupportContainer", {
        delay: 1,
        x: 0,
        y: 100, // Change y to move downwards
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".comprahensiveSupportContainer", {
        delay: 1,
        x: 150, // Move back to the original x position
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".comprahensiveSupportContainer", {
        delay: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      });

    tlMain.add(tlSustainable, 0); // Add tlSustainable starting at time 0 of tlMain
    tlMain.add(tlSupport, 0); // Add tlSupport starting at time 0 of tlMain
  });

  return (
    <main className="p-32 relative heroSection">
      <div className="comprahensiveSupportContainer absolute right-40 z-20">
        <div className="w-fit comprahensiveSupportWrapper bg-primaryColor">
          Comprehensive Support
        </div>
        <img
          className="comprahensiveSupportArrow absolute -bottom-5 -left-5"
          src={cursor}
          alt="cursor"
        />
      </div>
      <div className="absolute bottom-[25vh]">
        <h1 className="heroHeading ">
          Ultrices ut etiam vulputate ante congue <br />
          jokichn na <span className="text-primaryColor">Lorem Ipsum</span>
        </h1>
        <div className="mt-8 space-x-6">
          <button className="primaryButton">Learn More</button>
          <button>Watch Video</button>
        </div>
        <div className="sustainableGrowthContainer absolute -bottom-20 left-96">
          <div className="relative">
            <img
              className="sustainableGrowthArrow absolute -top-6 -left-6"
              src={cursor}
              alt="cursor"
            />
            <div className="susGrowthContainer bg-primaryColor w-fit">
              Sustainable Growth
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
