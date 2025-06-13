function ButtonRedirectOtherForo(props) {
  return <button onClick={props.redirect} style={styles.button}>{props.title}</button>;
}

export default ButtonRedirectOtherForo;


const styles = {
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100px",
    justifyContent: "center"
    
  },
}