import Presentation from "../components/Presentation";
import ProfilPicture from "../components/ProfilPicture";

export default function About() {
  return (
    <div>
      <h1 className="title blue-text text-2xl md:text-6xl font-semibold text-center mt-5 md:mt-30 mb-5 md:mb-20">
        À propos de moi
      </h1>
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <ProfilPicture size="small" />
        <Presentation />
      </div>
    </div>
  );
}
