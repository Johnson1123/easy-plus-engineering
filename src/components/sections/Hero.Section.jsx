import { text_xlg_light } from "../../styles/utils";
import Herobtn from "../btn/Hero.btn";
import { finished_project } from "../../assets/images";

function HeroSection() {
  return (
    <div className="h-[calc(100vh-70px)] hero-image-overlay flex justify-center">
      <div className=" w-[95%] md:[90%] lg:w-[75%] flex flex-col lg:flex-row justify-center lg:justify-between items-center h-[100%]">
        <div className="w-[90%] md:w-[90%] lg:w-[50%] flex flex-col items-center">
          <p className={`!text-white  ${text_xlg_light}`}>
            I welcome you to EasyPlus, a reputable Engineering and Construction
            Company firm renowned for its commitment to integrity and honesty.
            Specializing in a wide range of civil engineering, and construction
            services.
          </p>
          <Herobtn />
        </div>
        <div className=" hidden lg:flex w-[40%]"></div>
      </div>
    </div>
  );
}

export default HeroSection;
