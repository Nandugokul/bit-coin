import "./HeroSection.css";
function HeroSection() {
  return (
    <main className="p-32 heroSection">
      <div className="absolute bottom-[25vh]">
        <h1 className="heroHeading ">
          Ultrices ut etiam vulputate ante congue <br />
          jokichn na <span className="text-primaryColor">Lorem Ipsum</span>
        </h1>
        <div className="mt-8 space-x-6">
          <button className="primaryButton">Learn More</button>
          <button>Watch Video</button>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
