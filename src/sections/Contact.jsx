import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>If you want to reach out, feel free to contact me via email or check my GitHub/LinkedIn.</p>

      <div className="contact-links">
        <a href="mailto:your.email@example.com">Email Me</a>
        <a href="https://github.com/raneemmerei18-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/raneem-merei-62392b3a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
