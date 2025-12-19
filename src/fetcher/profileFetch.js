export const getUserProfile = async (username) => {
  try {
    const response = await fetch(`https://ghostplaybackend.onrender.com/auth/login/auth/profile/${username}`, {
      method: "GET",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al obtener el perfil");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
