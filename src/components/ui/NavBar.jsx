import logo from "../../assets/ImagesAndIcons/SVG/bitNowLogo.svg";
function NavBar() {
  return (
    <nav className="flex py-4 fixed top-0 h-[10vh] w-full px-32 z-50">
      <div className="w-1/4">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-grow space-x-6 justify-end items-center">
        <a href="" className="text-primaryColor font-medium">
          Home
        </a>
        <a href="" className="font-medium">
          About Us
        </a>
        <a href="" className="font-medium">
          Services
        </a>
        <a href="" className="font-medium">
          Page
        </a>
        <a href="" className="font-medium">
          News
        </a>
        <a href="" className="font-medium">
          Contact
        </a>
        <button className="primaryButton">Get Started</button>
      </div>
    </nav>
  );
}
export default NavBar;
