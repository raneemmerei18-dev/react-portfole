import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">
          Ran<span>eem</span>
        </h1>

        <ul className="nav-links">
          <li><a href="#hero" className="nav-link"><span>Home</span></a></li>
          <li><a href="#about" className="nav-link"><span>About</span></a></li>
          <li><a href="#technologies" className="nav-link"><span>Tech</span></a></li>
          <li><a href="#skills" className="nav-link"><span>Skills</span></a></li>
          <li><a href="#projects" className="nav-link"><span>Projects</span></a></li>
          <li><a href="#contact" className="nav-link contact-btn"><span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
