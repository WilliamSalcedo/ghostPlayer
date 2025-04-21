const GameCard = (props) => {
  return (
    <button style={styles.containerImageCard} onClick={props.onClick}>
      <img src={props.image} alt={props.alt} style={styles.imageCard} />
    </button>
  );
};
export default GameCard;

const styles = {
  imageCard: {
    width: "160px",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
    boxShadow: "0 0 10px #00ffab22",
    transition: "transform 0.2s",
    cursor: "pointer",
  },

  containerImageCard:{
    all: "unset",
  }
};
