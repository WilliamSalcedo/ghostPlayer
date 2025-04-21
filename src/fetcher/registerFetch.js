export const registerUser = async ({ username, email, password, favoriteConsole }) => {
    try {
      const response = await fetch("http://localhost:3012/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          favoriteConsole,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error al registrar");
      }
  
      return data;
    } catch (error) {
      console.error(error)
    }
  };
  