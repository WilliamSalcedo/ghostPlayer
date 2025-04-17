const RegisterScreen = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.tittle}>Crea tu cuenta</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Nombre de usuario
          <input
            type="text"
            name="username"
            style={styles.input}
            required
          />
        </label>

        <label style={styles.label}>
            Email
            <input type="email" name="email" style={styles.input} required/>
        </label>

        <label style={styles.label}>
            Contraseña
            <input type="password" name="password" style={styles.input} required/>
        </label>
           
        <label style={styles.label}>
            Confirmar Contraseña
            <input type="password" name="password" style={styles.input} required/>
        </label>

        <label style={styles.label}>
          Consola Favorita
          <select
            name="favoriteConsole"
            style={styles.input}
            required
          >
            <option value="">Selecciona tu consola</option>
            <option value="ps">PlayStation</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo">Nintendo</option>
            <option value="pc">PC</option>
          </select>
        </label>

        <button type="submit" style={styles.button}>Registrarse</button>
      </form>
    </section>
  );
};

export default RegisterScreen;

const styles = {
    section: {
        minHeight: "100vh",
        padding: "2rem",
        background: "radial-gradient(circle at center, #1c1f1d 0%, #0e0f0e 80%)",
        color: "#fff",
        fontFamily: "'Rajdhani', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      title: {
        fontSize: "2rem",
        marginBottom: "2rem",
        color: "#00ffab",
      },
      form: {
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      },
      label: {
        display: "flex",
        flexDirection: "column",
        fontSize: "1rem",
        color: "#ccc",
      },
      input: {
        padding: "0.75rem",
        borderRadius: "8px",
        border: "1px solid #444",
        background: "#1a1a1a",
        color: "#fff",
        marginTop: "0.5rem",
      },
      button: {
        marginTop: "1rem",
        background: "linear-gradient(45deg, #00f0ff, #39ff14)",
        color: "#000",
        padding: "0.75rem 1.5rem",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer",
      },
};
