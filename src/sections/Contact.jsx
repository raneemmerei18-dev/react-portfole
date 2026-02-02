import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>If you want to reach out, feel free to contact me via email or check my GitHub/LinkedIn.</p>

      <div className="contact-links">
        <a href="mailto:your.email@example.com">Email Me</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
