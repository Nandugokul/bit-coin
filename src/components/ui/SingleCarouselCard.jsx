import carouselProfileImage from "../../assets/ImagesAndIcons/Images/carouselImage1.png";
import "../carousel/Carousel.css";
function SingleCarouselCard() {
  return (
    <div className="carouselCard p-6">
      <div className="flex flex-col justify-center items-center text-center w-80">
        <img className="w-32 " src={carouselProfileImage} alt="image" />
        <h6 className="text-4 mt-6 mb-2">Lorem Ipsum</h6>
        <small>Lorem, ipsum dolor.</small>
        <div className="text-start">
          <p className="text-4 mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <small>
            Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim
            sagittis malesuada consectetur. Suspendisse lectus mi nulla
            consectetur elementum.
          </small>
        </div>
      </div>
    </div>
  );
}

export default SingleCarouselCard;
