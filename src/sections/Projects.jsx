import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal website to showcase my skills and projects using React.</p>
          <p><strong>Technologies:</strong> React, CSS, JavaScript</p>
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        {/* Project 2 */}
         <div className="project-card">
    <h3>Smart Beauty Center</h3>
    <p>A full-stack web application developed as my Senior Project</p>
    <p><strong>Technologies:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
    <a href="https://github.com/yourusername/smart-beauty-center" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>

     {/* Project 3*/}
<div className="project-card">
  <h3>Thief in Home Robotics</h3>
  <p>An automated home security system designed to detect intruders and alert users in real-time.</p>
  <p><strong>Technologies:</strong> ESP8266, Gas Sensor, PIR Sensor, Keypad, LCD, RGB</p>
  <a href="https://github.com/yourusername/thief-in-home" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>
{/* Project 4*/}
<div className="project-card">
  <h3>Simple Animal Shop</h3>
  <p>A full-stack e-commerce website for buying, selling, and adopting animals with cart and checkout functionality.</p>
  <p><strong>Technologies:</strong> HTML, CSS, PHP, MySQL, JavaScript</p>
  <a href="https://github.com/yourusername/animal-shop" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

      </div>
    </section>
  );
}

export default Projects;
