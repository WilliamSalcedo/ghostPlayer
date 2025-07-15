import React, { useState, useEffect } from 'react';
import { User, Edit3, Trophy, Gamepad2, Calendar, Star, Heart, MessageCircle, Clock } from 'lucide-react';
import { getUserProfile } from '../../fetcher/profileFetch';


const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  const stats = [
    { label: 'Juegos Favoritos', value: '42', icon: Heart },
    { label: 'Comentarios', value: '128', icon: MessageCircle },
    { label: 'Logros', value: '89', icon: Trophy },
    { label: 'Horas Jugadas', value: '1,247', icon: Clock }
  ];

  const recentActivity = [
    { action: 'Agregó a favoritos', game: 'Cyberpunk 2077', time: 'Hace 2 horas' },
    { action: 'Comentó en', game: 'The Last of Us Part II', time: 'Hace 1 día' },
    { action: 'Calificó', game: 'God of War Ragnarök', rating: 5, time: 'Hace 3 días' },
    { action: 'Agregó a favoritos', game: 'Elden Ring', time: 'Hace 1 semana' }
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData?.username) return;

        const res = await getUserProfile(userData.username);
        const user = res.user;

        setProfile({
          username: user.username || '',
          email: user.email || '',
          favoriteConsole: user.favoriteConsole || '',
          gamerTag: user.gamerTag || '',
          bio: user.bio || '',
          joinDate: new Date(user.createdAt).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });
      } catch (err) {
        console.error('❌ Error al cargar perfil:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = () => {
    setIsEditing(false);
  };

  if (isLoading) return <div>Cargando perfil...</div>;
  if (!profile) return <div>No se pudo cargar el perfil.</div>;

  return (
    <div className="profile-container">
      <div className="forum-header">
        <h1 className="forum-title text-gradient">Mi Perfil</h1>
      </div>

      <div className="profile-layout">
        <div>
          <div className="profile-card">
            <div className="profile-avatar-section">
              <div className="avatar avatar-lg">
                <User className="icon-lg" />
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  className="input profile-username-input"
                />
              ) : (
                <h2 className="profile-username">{profile.username}</h2>
              )}
              {profile.gamerTag && <p className="profile-tag">{profile.gamerTag}</p>}
            </div>

            <div className="space-y-4">
              {profile.email && (
                <div className="profile-field">
                  <label>Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="input"
                    />
                  ) : (
                    <p className="profile-field-value">{profile.email}</p>
                  )}
                </div>
              )}

              {profile.favoriteConsole && (
                <div className="profile-field">
                  <label>Consola Favorita</label>
                  {isEditing ? (
                    <select
                      value={profile.favoriteConsole}
                      onChange={(e) => setProfile({ ...profile, favoriteConsole: e.target.value })}
                      className="input select"
                    >
                      <option value="PlayStation 5">PlayStation 5</option>
                      <option value="Xbox Series X">Xbox Series X</option>
                      <option value="Nintendo Switch">Nintendo Switch</option>
                      <option value="PC Gaming">PC Gaming</option>
                    </select>
                  ) : (
                    <p className="profile-field-value">{profile.favoriteConsole}</p>
                  )}
                </div>
              )}

              {profile.bio && (
                <div className="profile-field">
                  <label>Biografía</label>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="input textarea"
                      rows={3}
                    />
                  ) : (
                    <p className="profile-field-value">{profile.bio}</p>
                  )}
                </div>
              )}

              <div className="comment-meta">
                <Calendar className="icon" />
                Miembro desde {profile.joinDate}
              </div>
            </div>

            <div className="space-y-2">
              {isEditing ? (
                <div className="flex space-x-2">
                  <button onClick={handleSave} className="btn btn-primary flex-1">Guardar</button>
                  <button onClick={() => setIsEditing(false)} className="btn btn-secondary flex-1">Cancelar</button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary flex items-center justify-center space-x-2"
                  style={{ width: '100%' }}
                >
                  <Edit3 className="icon" />
                  <span>Editar Perfil</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 className="flex items-center space-x-2">
              <Gamepad2 className="icon text-primary" />
              <span>Actividad Reciente</span>
            </h3>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="flex items-center space-x-3">
                    <div className="activity-icon">
                      <Gamepad2 className="icon" />
                    </div>
                    <div>
                      <p>
                        <span className="activity-action">{activity.action}</span>{' '}
                        <span className="activity-game">{activity.game}</span>
                      </p>
                      {activity.rating && (
                        <div className="rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`star ${i < activity.rating ? 'filled' : 'empty'}`} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="activity-time">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;