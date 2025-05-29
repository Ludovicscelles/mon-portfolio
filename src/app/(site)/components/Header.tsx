export default function Headear() {
  return (
    <header>
      <nav className="flex justify-end">
        <a href="home" className="blue-text font-bold  mr-5">
          Accueil
        </a>
        <a href="competences" className="blue-text font-bold  mr-5">
          Compétences
        </a>
        <a href="apropos" className="blue-text font-bold  mr-5">
          À propos
        </a>
        <a href="contact" className="blue-text font-bold  mr-3">
          Contact
        </a>
      </nav>
    </header>
  );
}
