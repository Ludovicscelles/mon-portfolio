import ProfilPicture from "../components/ProfilPicture";
import OpeningToProjects from "../components/OpeningToProjects";

export default function Home() {
  return (
    <div>
      <h1 className="font-reddit blue-text text-3xl md:text-8xl font-semibold uppercase text-center mt-5 md:mt-10 mb-5 md:mb-10">
        Ludovic <br className="bloc md:hidden" /> Scelles
      </h1>
      <div className="inline-block md:flex">
        <ProfilPicture />
        <OpeningToProjects />
      </div>
    </div>
  );
}
