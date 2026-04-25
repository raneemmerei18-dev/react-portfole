import "../styles/projects.css";
import fitnessCenterImg from "../assets/projects/fitness-center.PNG";
import giftyImg from "../assets/projects/gifty.PNG";
import smartBeautyCenterImg from "../assets/projects/smart-beauty-center.PNG";
import tasklyImg from "../assets/projects/taskly.PNG";
import animalShopImg from "../assets/projects/animal-shop.png";
import portfolioImg from "../assets/projects/raneem-portfolio.PNG";

const projects = [
  {
    title: "Fitness Center",
    image: fitnessCenterImg,
    description:
      "Developed a responsive web application with optimized routing and integrated database management.",
    technologies: "Next.js, TypeScript, MongoDB",
    link: "https://github.com/raneemmerei18-dev/fitness-center",
  },
  {
    title: "gifty",
    image: giftyImg,
    description:
      "Built an interactive application with real-time data handling and dynamic user interface.",
    technologies: "React, TypeScript, MongoDB",
    link: "https://github.com/raneemmerei18-dev/gifty",
  },
  {
    title: "smart_beauty_center",
    image: smartBeautyCenterImg,
    description:
      "Created a full-stack system with authentication and booking functionality.",
    technologies: "HTML, CSS, PHP",
    link: "https://github.com/raneemmerei18-dev/smart_beauty_center",
  },
  {
    title: "Taskly",
    image: tasklyImg,
    description:
      "Developed a task management app with full CRUD operations and structured backend APIs.",
    technologies: "Vue, NestJS",
    link: "https://github.com/raneemmerei18-dev/taskly",
  },
  {
    title: "animalSop",
    image: animalShopImg,
    description:
      "Built an e-commerce website with product listing and basic transaction flow.",
    technologies: "HTML, CSS, PHP",
    link: "https://github.com/raneemmerei18-dev/animalSop",
  },
  {
    title: "Raneem_portfolio",
    image: portfolioImg,
    description:
      "Designed and developed a personal portfolio website to showcase projects and skills.",
    technologies: "React",
    link: "https://github.com/raneemmerei18-dev/Raneem_portfolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
