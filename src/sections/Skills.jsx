import "../styles/skills.css";
import {
  FaBroom,
  FaCode,
  FaCubes,
  FaDiagramProject,
  FaListCheck,
  FaMicrochip,
  FaMobileScreenButton,
  FaPeopleGroup,
  FaPlug,
  FaPuzzlePiece,
  FaUsers,
} from "react-icons/fa6";

const skillItems = [
  { name: "Component-based Development", icon: FaPuzzlePiece, color: "#7c3aed" },
  { name: "Responsive Design", icon: FaMobileScreenButton, color: "#0ea5e9" },
  { name: "API Integration", icon: FaPlug, color: "#22c55e" },
  { name: "Arduino Uno", icon: FaMicrochip, color: "#00979d" },
  { name: "ESP8266", icon: FaMicrochip, color: "#2563eb" },
  { name: "Clean Code Practices", icon: FaBroom, color: "#f97316" },
  { name: "SOLID Principles", icon: FaCubes, color: "#64748b" },
  { name: "Design Patterns", icon: FaDiagramProject, color: "#ec4899" },
  { name: "Agile / Scrum Workflow", icon: FaPeopleGroup, color: "#14b8a6" },
  { name: "Jira Task Management", icon: FaListCheck, color: "#3b82f6" },
  { name: "CI/CD Fundamentals", icon: FaCode, color: "#22c55e" },
  { name: "UI/UX Basics", icon: FaMobileScreenButton, color: "#e11d48" },
  { name: "Team Collaboration", icon: FaUsers, color: "#a855f7" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skillItems.map(({ name, icon: Icon, color }) => (
          <div className="skill-card" key={name} style={{ "--skill-color": color }}>
            <span className="skill-icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="skill-label">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
