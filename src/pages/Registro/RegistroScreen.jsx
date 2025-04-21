import { useRegister } from "./useRegister";

const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    watch,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    passwordValue,
    setPasswordValue,
  } = useRegister();

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Crea tu cuenta</h2>

      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label style={styles.label}>
          Nombre de usuario
          <input
            type="text"
            {...register("username", {
              required: "Campo obligatorio",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
            })}
            style={styles.input}
          />
          {errors.username && (
            <span style={styles.error}>{errors.username.message}</span>
          )}
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            {...register("email", {
              required: "Campo obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: "Email no válido",
              },
            })}
            style={styles.input}
          />
          {errors.email && (
            <span style={styles.error}>{errors.email.message}</span>
          )}
        </label>

        <label style={styles.label}>
          Contraseña
          <div style={styles.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Campo obligatorio",
                minLength: { value: 6, message: "Mínimo 6 caracteres" },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).+$/,
                  message: "Debe incluir una mayúscula y un número",
                },
                onChange: (e) => setPasswordValue(e.target.value),
              })}
              style={styles.inputWithIcon}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <ul style={styles.passwordHints}>
            <li style={{ color: passwordValue.length >= 6 ? "lime" : "red" }}>
              Mínimo 6 caracteres
            </li>
            <li style={{ color: /[A-Z]/.test(passwordValue) ? "lime" : "red" }}>
              Al menos una mayúscula
            </li>
            <li style={{ color: /\d/.test(passwordValue) ? "lime" : "red" }}>
              Al menos un número
            </li>
          </ul>
          {errors.password && (
            <span style={styles.error}>{errors.password.message}</span>
          )}
        </label>

        <label style={styles.label}>
          Confirmar Contraseña
          <div style={styles.inputWrapper}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Campo obligatorio",
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
              style={styles.inputWithIcon}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeButton}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.confirmPassword && (
            <span style={styles.error}>{errors.confirmPassword.message}</span>
          )}
        </label>

        <label style={styles.label}>
          Consola Favorita
          <select
            {...register("favoriteConsole", {
              required: "Selecciona una consola",
            })}
            style={styles.input}
          >
            <option value="">Selecciona tu consola</option>
            <option value="ps">PlayStation</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo">Nintendo</option>
            <option value="pc">PC</option>
          </select>
          {errors.favoriteConsole && (
            <span style={styles.error}>{errors.favoriteConsole.message}</span>
          )}
        </label>

        <button type="submit" style={styles.button}>
          Registrarse
        </button>
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
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  inputWithIcon: {
    padding: "0.75rem",
    paddingRight: "2.5rem",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#1a1a1a",
    color: "#fff",
    width: "100%",
  },
  eyeButton: {
    position: "absolute",
    right: "0.75rem",
    background: "transparent",
    border: "none",
    color: "#ccc",
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  passwordHints: {
    listStyle: "none",
    paddingLeft: 0,
    marginTop: "0.5rem",
    fontSize: "0.85rem",
    lineHeight: "1.4",
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
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.25rem",
  },
};
