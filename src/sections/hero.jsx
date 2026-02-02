import "../styles/hero.css";
import profile from "../assets/profile.jpeg"; // الاسم الصح

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* ===== Text ===== */}
      <div className="hero-text">
        <span className="hero-eyebrow">GET EVERY SINGLE SOLUTION</span>

        <h1 className="hero-title">
          Hi, I’m <br /> <span>Raneem</span>
        </h1>

        <h3 className="hero-subtitle">Frontend Developer</h3>

       

        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Hire Me</a>
        </div>
      </div>

      {/* ===== Image ===== */}
      <div className="hero-image">
        <div className="image-wrapper blur-bg">
          <img src={profile} alt="Raneem profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
