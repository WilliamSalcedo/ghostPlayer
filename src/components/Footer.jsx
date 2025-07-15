import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.copyright}>
        <p>© {new Date().getFullYear()} GhostPlay</p>
      </div>

      <div style={styles.links}>
        <a href="#" style={styles.link}>Términos</a>
        <a href="#" style={styles.link}>Privacidad</a>
        <a href="#" style={styles.link}>Soporte</a>
      </div>

      <div style={styles.logos}>
        <button style={styles.button}><FaInstagram size={25} color="white" /></button>
        <button style={styles.button}><FaFacebook size={25} color="white" /></button>
        <button style={styles.button}><FaXTwitter size={25} color="white" /></button>
        <button style={styles.button}><FaYoutube size={25} color="white" /></button>
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#111",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    boxShadow: "0 -2px 10px rgba(0, 255, 255, 0.2)",
    fontFamily: "'Orbitron', sans-serif",
    flexWrap: "wrap",
  },
  copyright: {
    color: "#ccc",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#00f0ff",
    textDecoration: "none",
    fontSize: "14px",
  },
  logos: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    background: "transparent",
    border: "1px solid #00f0ff",
    borderRadius: "50%",
    padding: "8px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
};
