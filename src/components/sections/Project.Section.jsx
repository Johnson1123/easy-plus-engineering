import { text_lg_bold } from "../../styles/utils";
import ProjectOverlayBox from "../Project.Overlay.Box";
import {
  project_structure_eleven,
  project_structure_six,
  project_structure_twelve,
  structure_five,
  structure_four,
  structure_two,
} from "../../assets/images";

function ProjectSection() {
  return (
    <div className="flex flex-col items-center bg-[#fff] py-5 md:h-[60vh] lg:h-[100vh] justify-center gap-5">
      <p className={`${text_lg_bold}`}>Our Project Gallery</p>
      <div className="w-[90%] md:w-[85%]  lg:w-[60%] flex justify-between flex-wrap gap-5 md:gap-2 md:gap-y-10  mt-5 md:mt-10">
        <ProjectOverlayBox
          image={project_structure_twelve}
          text={"Lecture theater foundation Area view"}
        />
        <ProjectOverlayBox image={structure_five} text={"DPC Casting"} />
        <ProjectOverlayBox
          image={structure_four}
          text={"Columns and frameworks"}
        />
        <ProjectOverlayBox
          image={project_structure_eleven}
          text={"Concrete Reinforcement"}
        />
        <ProjectOverlayBox
          image={project_structure_six}
          text={"Water Pipeline Fitting"}
        />
        <ProjectOverlayBox
          image={structure_two}
          text={"Building Skeleton Structure"}
        />
      </div>
    </div>
  );
}

export default ProjectSection;
