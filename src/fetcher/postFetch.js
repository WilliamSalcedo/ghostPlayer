const API_BASE_URL = 'https://ghostplaybackend.onrender.com';


const handleFetchError = (error) => {
  if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
    throw new Error('No se puede conectar al servidor. Asegúrate de que el backend esté ejecutándose.');
  }
  throw error;
};


export const getAllPosts = async (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.category) params.append('category', filters.category);
  if (filters.game) params.append('game', filters.game);
  if (filters.author) params.append('author', filters.author);

  try {
    const response = await fetch(`${API_BASE_URL}/posts?${params}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener posts');
    }
    
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error(error);
    handleFetchError(error);
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener el post');
    }
    
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al crear el post');
    }

    return data.post;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePost = async (postId, updateData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al actualizar el post');
    }

    return data.post;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Error al eliminar el post');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/like`, {
      method: 'POST',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al dar like');
    }

    return data.post;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Comments
export const getComments = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al obtener comentarios');
    }

    return data.comments;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addComment = async (postId, commentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al agregar comentario');
    }

    return data.comment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};