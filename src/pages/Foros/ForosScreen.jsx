import React, { useState, useEffect } from 'react';
import { MessageCircle, ThumbsUp, Clock, User, Send, Filter, Plus, Edit3, Trash2, X } from 'lucide-react';
import { 
  getAllPosts, 
  createPost, 
  updatePost, 
  deletePost, 
  likePost, 
  getPostById, 
  addComment 
} from '../../fetcher/postFetch';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtros
  const [filterCategory, setFilterCategory] = useState('');
  const [filterGame, setFilterGame] = useState('');
  
  // Nuevo post
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    author: '',
    category: '',
    game: ''
  });

  // Editar post
  const [editingPost, setEditingPost] = useState(null);
  const [editData, setEditData] = useState({
    title: '',
    description: '',
    author: '',
    category: '',
    game: ''
  });

  // Comentarios
  const [expandedPost, setExpandedPost] = useState(null);
  const [newComment, setNewComment] = useState({});

  const categories = ['General', 'Acción', 'RPG', 'Deportes', 'Estrategia', 'Aventura'];
  const games = ['General', 'FIFA 24', 'Call of Duty', 'The Last of Us', 'Cyberpunk 2077', 'Elden Ring'];

  useEffect(() => {
    loadPosts();
  }, [filterCategory, filterGame]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const filters = {};
      if (filterCategory) filters.category = filterCategory;
      if (filterGame) filters.game = filterGame;
      
      const postsData = await getAllPosts(filters);
      setPosts(postsData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar los posts';
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const createdPost = await createPost(newPost);
      setPosts([createdPost, ...posts]);
      setNewPost({ title: '', description: '', author: '', category: '', game: '' });
      setShowNewPostForm(false);
    } catch (err) {
      setError('Error al crear el post');
      console.error(err);
    }
  };

  const handleUpdatePost = async (postId) => {
    try {
      const updatedPost = await updatePost(postId, editData);
      setPosts(posts.map(post => post._id === postId ? updatedPost : post));
      setEditingPost(null);
    } catch (err) {
      setError('Error al actualizar el post');
      console.error(err);
    }
  };

  const handleDeletePost = async (postId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este post?')) {
      try {
        await deletePost(postId);
        setPosts(posts.filter(post => post._id !== postId));
      } catch (err) {
        setError('Error al eliminar el post');
        console.error(err);
      }
    }
  };

  const handleLikePost = async (postId) => {
    try {
      const updatedPost = await likePost(postId);
      setPosts(posts.map(post => post._id === postId ? updatedPost : post));
    } catch (err) {
      setError('Error al dar like');
      console.error(err);
    }
  };

  const handleAddComment = async (postId) => {
    const commentData = newComment[postId];
    if (!commentData?.username || !commentData?.content) return;

    try {
      await addComment(postId, commentData);
      // Recargar el post para obtener los comentarios actualizados
      const updatedPost = await getPostById(postId);
      setPosts(posts.map(post => post._id === postId ? updatedPost : post));
      
      // Limpiar el formulario
      setNewComment(prev => ({ ...prev, [postId]: { username: '', content: '' } }));
    } catch (err) {
      setError('Error al agregar comentario');
      console.error(err);
    }
  };

  const startEdit = (post) => {
    setEditingPost(post._id);
    setEditData({
      title: post.title,
      description: post.description,
      author: post.author,
      category: post.category,
      game: post.game
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="forum-loading">
        <div className="loading-spinner"></div>
        <p>Cargando posts...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="forum-header">
        <h1 className="forum-title text-gradient">
          Foro Gaming
        </h1>
        <p className="forum-description">
          Comparte tus experiencias, reseñas y opiniones sobre consolas y videojuegos
        </p>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)} className="error-close">
            <X className="icon" />
          </button>
        </div>
      )}

      {/* Controls */}
      <div className="forum-controls">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowNewPostForm(!showNewPostForm)}
            className="btn btn-primary flex items-center space-x-2"
          >
            <Plus className="icon" />
            <span>Nuevo Post</span>
          </button>

          <div className="flex items-center space-x-2">
            <Filter className="icon text-primary" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="input select"
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={filterGame}
              onChange={(e) => setFilterGame(e.target.value)}
              className="input select"
            >
              <option value="">Todos los juegos</option>
              {games.map(game => (
                <option key={game} value={game}>{game}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* New Post Form */}
      {showNewPostForm && (
        <div className="comment-form">
          <h2 className="flex items-center space-x-2">
            <MessageCircle className="icon text-primary" />
            <span>Crear Nuevo Post</span>
          </h2>
          
          <form onSubmit={handleCreatePost} className="space-y-4">
            <input
              type="text"
              placeholder="Título del post"
              value={newPost.title}
              onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              className="input"
              required
            />
            
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={newPost.author}
                onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                className="input"
              />
              
              <select
                value={newPost.category}
                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                className="input select"
              >
                <option value="">Categoría</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={newPost.game}
                onChange={(e) => setNewPost({...newPost, game: e.target.value})}
                className="input select"
              >
                <option value="">Juego</option>
                {games.map(game => (
                  <option key={game} value={game}>{game}</option>
                ))}
              </select>
            </div>
            
            <textarea
              placeholder="Describe tu experiencia gaming..."
              value={newPost.description}
              onChange={(e) => setNewPost({...newPost, description: e.target.value})}
              className="input textarea"
              rows={4}
              required
            />
            
            <div className="flex space-x-2">
              <button type="submit" className="btn btn-primary flex items-center space-x-2">
                <Send className="icon" />
                <span>Publicar</span>
              </button>
              <button
                type="button"
                onClick={() => setShowNewPostForm(false)}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="empty-state">
            <MessageCircle className="empty-icon" />
            <h3 className="empty-title">No hay posts disponibles</h3>
            <p className="empty-description">Sé el primero en compartir tu experiencia gaming</p>
          </div>
        ) : (
          posts.map(post => (
            <div key={post._id} className="comment-item">
              {editingPost === post._id ? (
                // Edit Form
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editData.title}
                    onChange={(e) => setEditData({...editData, title: e.target.value})}
                    className="input"
                  />
                  <textarea
                    value={editData.description}
                    onChange={(e) => setEditData({...editData, description: e.target.value})}
                    className="input textarea"
                    rows={3}
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdatePost(post._id)}
                      className="btn btn-primary"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditingPost(null)}
                      className="btn btn-secondary"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                // Post Display
                <>
                  <div className="comment-author">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <User className="icon" />
                      </div>
                      <div>
                        <h3 className="text-primary">{post.author}</h3>
                        <div className="comment-meta">
                          <Clock className="icon" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="badge badge-primary">{post.category}</span>
                      {post.game !== 'General' && (
                        <span className="badge badge-secondary">{post.game}</span>
                      )}
                      <button
                        onClick={() => startEdit(post)}
                        className="game-action-btn game-action-view"
                      >
                        <Edit3 className="icon" />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post._id)}
                        className="game-action-btn game-action-remove"
                      >
                        <Trash2 className="icon" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="comment-content">{post.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLikePost(post._id)}
                        className="flex items-center space-x-2 hover-primary"
                      >
                        <ThumbsUp className="icon" />
                        <span>{post.likes}</span>
                      </button>
                      
                      <button
                        onClick={() => setExpandedPost(expandedPost === post._id ? null : post._id)}
                        className="flex items-center space-x-2 hover-primary"
                      >
                        <MessageCircle className="icon" />
                        <span>{post.comments?.length || 0} comentarios</span>
                      </button>
                    </div>
                  </div>

                  {/* Comments Section */}
                  {expandedPost === post._id && (
                    <div className="comments-section">
                      {/* Add Comment Form */}
                      <div className="comment-form-inline">
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="Tu nombre"
                            value={newComment[post._id]?.username || ''}
                            onChange={(e) => setNewComment(prev => ({
                              ...prev,
                              [post._id]: { ...prev[post._id], username: e.target.value }
                            }))}
                            className="input"
                          />
                          <button
                            onClick={() => handleAddComment(post._id)}
                            className="btn btn-primary"
                          >
                            Comentar
                          </button>
                        </div>
                        <textarea
                          placeholder="Escribe tu comentario..."
                          value={newComment[post._id]?.content || ''}
                          onChange={(e) => setNewComment(prev => ({
                            ...prev,
                            [post._id]: { ...prev[post._id], content: e.target.value }
                          }))}
                          className="input textarea"
                          rows={2}
                        />
                      </div>

                      {/* Comments List */}
                      <div className="comments-list">
                        {post.comments?.map((comment, index) => (
                          <div key={index} className="comment-reply">
                            <div className="flex items-start space-x-3">
                              <div className="avatar avatar-sm">
                                <User className="icon" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="comment-author-name">{comment.username}</span>
                                  <span className="comment-date">{formatDate(comment.date)}</span>
                                </div>
                                <p className="comment-reply-content">{comment.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;