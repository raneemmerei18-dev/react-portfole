import "../styles/technologies.css";
import {
  SiArduino,
  SiCss,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRender,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaCubesStacked, FaLayerGroup, FaNetworkWired, FaServer } from "react-icons/fa6";

const techItems = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#1572b6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
  { name: "TanStack", icon: FaLayerGroup, color: "#ff4154" },
  { name: "Zustand", icon: FaCubesStacked, color: "#7f4f24" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express.js", icon: SiExpress, color: "#444444" },
  { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Django", icon: SiDjango, color: "#092e20" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "MERN Stack", icon: FaServer, color: "#2f855a" },
  { name: "REST APIs", icon: FaNetworkWired, color: "#0ea5e9" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#111111" },
  { name: "Render", icon: SiRender, color: "#46e3b7" },
  { name: "Flutter", icon: SiFlutter, color: "#02569b" },
  { name: "Arduino", icon: SiArduino, color: "#00979d" },
];

function Technologies() {
  return (
    <section id="technologies" className="technologies">
      <h2>Technologies & Tools</h2>

      <div className="tech-grid">
        {techItems.map(({ name, icon: Icon, color }) => (
          <div className="tech-card" key={name} style={{ "--tech-color": color }}>
            <span className="tech-icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="tech-label">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Technologies;
