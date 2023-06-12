"use client";
import { useGetIconTransform } from "../hooks/useGetIconTransform";
import BkgIcons from "../components/BkgIcons";
import Title from "../components/Title";
import SectionProjects from "../components/SectionProjects";

function HomePage() {
  const { iconTransformX, iconTransformY, handleMousePosition } =
    useGetIconTransform();

  return (
    <div
      onMouseMove={(e) => handleMousePosition(e)}
      className="h-screen w-full px-6 bg-gradient-radial flex flex-col items-center"
    >
      <BkgIcons
        iconTransformX={iconTransformX}
        iconTransformY={iconTransformY}
      />
      <Title />
      <SectionProjects />
    </div>
  );
}

export default HomePage;
