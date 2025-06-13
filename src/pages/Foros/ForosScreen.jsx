import React from "react";
import Header from "../../components/Header";
import ContainerButtonRedirect from "../../components/Foro/ContainerButtonRedirect";

const ForosScreen = () => {
  return (
    <>
      <Header />
      <div style={styles.containerMain}>
        <ContainerButtonRedirect />
      </div>
    </>
  );
};

export default ForosScreen;

const styles = {
  containerMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
};
