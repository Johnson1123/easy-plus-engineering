import { text_lg_light } from "../../styles/utils";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Twitter } from "../../assets/icons";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-black flex justify-center">
      <div className="w-[100%] md:w-[70%] lg:w-[60%] h-[250px] md:h-[150px] gap-5 justify-center flex flex-col items-center  md:flex-row md:items-center md:justify-between ">
        <p className={`text-white ${text_lg_light}`}>EasyPlus+</p>
        <div className="flex flex-col items-center">
          <p className="text-white">Privacy | Prolicy </p>
          <p className="text-white">Alright Reserved </p>
          <p className="text-white">&copy; {year}</p>
        </div>
        <div className="flex gap-5">
          <Link to="" className="">
            <Facebook className="text-white text-[18px]" />
          </Link>
          <Link to="">
            <Twitter className="text-white text-[18px]" />
          </Link>
          <Link to="">
            <LinkedIn className="text-white text-[18px]" />
          </Link>
          <Link to="">
            <Instagram className="text-white text-[18px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
