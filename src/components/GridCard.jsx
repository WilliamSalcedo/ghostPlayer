// import card1 from "../assets/card1";
// import card2 from "../assets/card2";
// import card3 from "../assets/card3";
import control from "../assets/controls.png"
import { useUserStore } from "../store/userStore";


function GridCard(){
    const user = useUserStore((state) => state.user);
    return(
    <div style={styles.principalCard}>
        <div style={styles.leftCard}>
            <h1 style={styles.tittle}> Bienvenido {user?.name}</h1>
            <h1 style={styles.tittle}>TU COMUNIDAD GAMER EN UN SOLO LUGAR</h1>
            <h4 style={styles.text}>Un foro de discución y una tienda para todos tus juegos y accesorios de consola.</h4>
        <div style={styles.button}>
            <button style={styles.buttonForo}>Unirse al foro</button>
            <button style={styles.buttonTienda}>Tienda</button>
        </div>
        </div>
        <div style={styles.rightCard}>
          <img src={control} alt="control" style={styles.control} />
        </div>
    </div>
    );
}
 export default GridCard;


 const styles = {
    principalCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        
    },
    leftCard: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        
        width: "50%",
        paddingLeft: "30px",
    },
    tittle: {
        color: "white",
        fontFamily: "'Orbitron', sans-serif",
    },
    text: {
        color: "white",
        fontFamily: "'exo 2', sans-serif",
    },
    rightCard: {
        
        width: "50%",
        
    },
    control: {
        display: "flex",
        paddingLeft: "60px",
        paddingTop: "30px",
        width: "400px",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",

    },
    buttonForo: {
        background: "#2fe89b",
        color: "#0a0a0a",
        border: "none",
        padding: "0.75rem 1.5rem",
        borderRadius: "10px",
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: "bold",
        cursor: "pointer",
    },
    buttonTienda: {
        background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
        color: "#ffffff",
        border: "1px solid #4a4a4a",
        padding: "0.75rem 1.5rem",
        borderRadius: "10px",
        fontFamily: "'Audiowide', sans-serif",
        cursor: "pointer",
    },
 }