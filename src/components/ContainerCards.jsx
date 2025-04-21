import React from "react";
import cardHalo from "../assets/halo.png";
import cardKratos from "../assets/kratos.png";
import GameCard from "./GameCards";
import cardGT from "../assets/granTurismo.png";

const ContainerCards = () => {
  return (
    <>
      <h3 style={styles.title}>Juegos destacados</h3>
      <div style={styles.principalCard}>
        <GameCard image={cardHalo} alt={"halo"} onClick={() => {}} />
        <GameCard image={cardKratos} alt={"kratos"} onClick={() => {}} />
        <GameCard image={cardGT} alt={"GranTurimo"} onClick={() => {}} />
        <GameCard image={cardHalo} alt={"halo"} onClick={() => {}} />
        <GameCard image={cardKratos} alt={"kratos"} onClick={() => {}} />
        <GameCard image={cardGT} alt={"GranTurimo"} onClick={() => {console.log("hola")}} />
      </div>
    </>
  );
};

export default ContainerCards;

const styles = {
  title: {
    color: "white",
    fontFamily: "'Orbitron', sans-serif",
    paddingLeft: "30px",
    marginBottom: "1rem",
  },
  principalCard: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "flex-start",
    paddingLeft: "30px",
  },
};
