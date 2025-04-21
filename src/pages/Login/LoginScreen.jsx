import { useLogin } from "./useLogin";
const LoginScreen = () => {
  const { register, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Bienvenido Gamer</h1>
      <h2 style={styles.title}>INGRESAR</h2>

      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label style={styles.label}>
          Nombre de usuario
          <input
            type="text"
            {...register("username", { required: "El nombre de usuario es obligatorio" })}
            style={styles.input}
          />
          {errors.username && <span style={{ color: "red" }}>{errors.username.message}</span>}
        </label>

        <label style={styles.label}>
          Contraseña
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/,
                message: "Mínimo 8 caracteres, alfanumérica y 1 mayúscula",
              },
            })}
            style={styles.input}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
        </label>

        <a href="#" style={styles.link}>
          ¿Olvidaste tu contraseña?
        </a>

        <button type="submit" style={styles.button}>Iniciar sesión</button>
      </form>
    </section>
  );
};

export default LoginScreen;

const styles = {
  section: {
    minHeight: "100vh",
    background: "radial-gradient(circle, #1c1f1d, #0e0f0e)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    color: "#fff",
    fontFamily: "'Orbitron', sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    color: "#00ffab",
    marginBottom: "2rem",
  },
  form: {
    backgroundColor: "#111",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 0 20px #00ffab44",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    maxWidth: "400px",
  },
  label: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    color: "#ccc",
  },
  input: {
    marginTop: "0.5rem",
    padding: "0.75rem",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#1a1a1a",
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    padding: "0.75rem",
    background: "#00ffab",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    color: "#000",
    cursor: "pointer",
    fontSize: "1rem",
  },
  link: {
    color: "#00ffab",
    textDecoration: "underline",
    fontSize: "0.9rem",
    marginTop: "-0.5rem",
    alignSelf: "flex-end",
  },
};
