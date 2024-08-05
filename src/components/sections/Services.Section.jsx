import ServicesBox from "../Services.Box";
import {
  civil,
  electrical,
  mechanical,
  surveyor,
  training,
  water,
} from "../../assets/icons";
import { text_lg_bold } from "../../styles/utils";

function ServicesSection() {
  return (
    <div className="flex flex-col items-center bg-primary py-5 min-h-[100vh] md:min-h-[60vh] lg:h-[100vh] justify-center gap-5">
      <p className={`${text_lg_bold}`}>Our Services</p>
      <div className="w-[90%] md:w-[85%]  lg:w-[60%] flex justify-between flex-wrap gap-5 lg:gap-10  mt-5 md:mt-10">
        <ServicesBox image={civil} text={"Civil Engineering Work"} />
        <ServicesBox image={mechanical} text={"Mechanical Engineering Work"} />
        <ServicesBox image={electrical} text={"Electrical Engineering Work"} />
        <ServicesBox image={surveyor} text={"Surveyor Engineering Work"} />
        <ServicesBox image={water} text={"Water Cooperation Works"} />
        <ServicesBox image={training} text={"Trainning Works"} />
      </div>
    </div>
  );
}

export default ServicesSection;
