import ProfilPicture from "../components/ProfilPicture";
import OpeningToProjects from "../components/OpeningToProjects";

export default function Home() {
  return (
    <div>
    <h1>Ludovic Scelles</h1>
    <div className="inline-block md:flex">
      
      <ProfilPicture />
      <OpeningToProjects />
    </div>
    </div>
  );
}
