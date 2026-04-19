import "../styles/hero.css";
import profile from "../assets/profile.jpeg"; 

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-layout">
        <div className="hero-text">

          <h1 className="hero-title">
            Raneem
            <span>Merei</span>
          </h1>

          <h3 className="hero-subtitle">Full-Stack Web Developer</h3>

          <p className="hero-description">
            I build websites that feel elegant, feminine, and alive with movement.
            From concept to code, I focus on turning ideas into polished user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">Explore Portfolio</a>
            <a href="#contact" className="btn secondary">Let&apos;s Talk</a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Graduate</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-card hero-card-top">UI Engineer</div>
          <div className="hero-card hero-card-bottom">React • PHP • MySQL</div>

          <div className="image-wrapper">
            <img src={profile} alt="Raneem profile" />
          </div>

          <div className="hero-ring" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
