import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">
  Ran<span>eem</span>
</h1>


        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">Tech</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
