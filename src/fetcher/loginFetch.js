export const loginUser = async ({ username, password }) => {
    try {
      const response = await fetch("http://localhost:3013/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }
  
      return data;
    } catch (error) {
      console.error(error)
    }
  };
  