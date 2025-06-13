import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.copyright}>
        <p>© {new Date().getFullYear()} GhostPlay </p>
      </div>
      <div style={styles.links}>
        <a href="" style={styles.link}>
          Terminos
        </a>
        <a href="" style={styles.link}>
          Privacidad
        </a>
        <a href="" style={styles.link}>
          Soporte
        </a>
      </div>
      <div style={styles.logos}>
        <button style={styles.button}>
          <FaInstagram size={25} color="white" />
        </button>
        <button style={styles.button}>
          <FaFacebook size={25} color="white" />
        </button>
        <button style={styles.button}>
          <FaXTwitter size={25} color="white" />
        </button>
        <button style={styles.button}>
          <FaYoutube size={25} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    color: "white",
    fontFamily: "'exo 2', sans-serif",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  copyright: {
    fontFamily: "'exo 2', sans-serif",
  },

  links: {
    display: "flex",
    gap: "1.5rem",
    paddingTop: "15px",
  },

  link: {
    color: "#00ffab",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontFamily: "'exo 2', sans-serif",
  },

  logos: {
    display: "flex",
    gap: "1.5rem",
    paddingTop: "15px",
  },

  button: {
    background: "transparent",
    border: "none",
    padding: "0",
    margin: "0",
    cursor: "pointer",
  },
};
