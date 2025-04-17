import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoH.png";

function Header() {

  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  const handleGotoRegister = () => {
    navigate('/register');
  };

  return (
    <nav style={styles.navBar}>
      <div style={styles.containerLogo}>
        <img src={logo} alt="logo" style={styles.logoImg} />
      </div>
      <div style={styles.containerLinks}>
        <ul style={styles.navLinks}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/foros">Foros</Link>
          </li>
          <li>
          <Link to="/">Tienda</Link>
          </li>
          <li>
          <Link to="/">Noticias</Link>
          </li>
        </ul>
      </div>
      <div style={styles.containerButton}>
        <button style={styles.buttonLogin} onClick={handleGoToLogin}>Iniciar sesión</button>
        <button style={styles.buttonRegister} onClick={handleGotoRegister}>Registro</button>
      </div>
    </nav>
  );
}

export default Header;

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d0d0d",
    padding: "1rem 1rem",
    width: "100%",
    boxShadow: "1px 2px 8px #00f0ff33",
  },
  logoImg: {
    width: "200px",
    height: "95px",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    width: "100%",
    fontFamily: "'Orbitron', sans-serif",
  },

  containerLogo: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  containerLinks: {
    width: "40%",
    display: "flex",
    justifyContent: "space-around",
  },
  containerButton: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
  },
  buttonLogin: {
    background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)", 
    color: "white",
    border: "2px solid #00f0ff",
    borderRadius: "8px",
    padding: "6px 12px",
    fontFamily: "'Audiowide', sans-serif",
    marginLeft: "10px",
    cursor: "pointer",
  },

  buttonRegister: {
    background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
    color: "white",
    border: "2px solid #00f0ff",
    borderRadius: "8px",
    padding: "6px 12px",
    fontFamily: "'Audiowide', sans-serif",
    marginLeft: "10px",
    cursor: "pointer",
  },
};
