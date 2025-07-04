import ProfilPicture from "../components/ProfilPicture";
import OpeningToProjects from "../components/OpeningToProjects";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="title blue-text text-3xl md:text-8xl font-semibold uppercase text-center mt-5 md:mt-10 mb-5 md:mb-10">
        <span className="block md:inline">Ludovic</span>
        <span className="block md:inline"> Scelles</span>
      </h1>
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <Link href="/apropos">
          <ProfilPicture source="/images/profil/ludovic2.png" />
        </Link>
        <Link href="/projets">
        <OpeningToProjects />
        </Link>
      </div>
    </div>
  );
}
