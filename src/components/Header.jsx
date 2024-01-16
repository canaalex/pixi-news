import snapLogo from "../assets/images/snapLogo.png";

const Header = () => {
  return (
    <div>
      <div className="p-4  bg-black bg-opacity-70 backdrop-blur-xl drop-shadow-lg flex justify-left text-4xl">
        <img src={snapLogo} alt="pixie" className="h-10 w-auto" />
      </div>
    </div>
  );
};
export default Header;
