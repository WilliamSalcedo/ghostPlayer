import React from 'react';
import { Gamepad2, Users, MessageSquare, Heart, Shield, Zap, Globe, Award } from 'lucide-react';

const AboutScreen = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Foro Interactivo',
      description: 'Comparte experiencias y opiniones sobre tus juegos y consolas favoritas con una comunidad apasionada.'
    },
    {
      icon: Users,
      title: 'Perfiles Personalizados',
      description: 'Crea tu perfil gamer único y conecta con otros jugadores que comparten tus intereses.'
    },
    {
      icon: Shield,
      title: 'Comunidad Segura',
      description: 'Ambiente moderado y respetuoso donde todos los gamers pueden expresarse libremente.'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Usuarios Activos', icon: Users },
    { number: '50K+', label: 'Juegos Catalogados', icon: Gamepad2 },
    { number: '100K+', label: 'Comentarios', icon: MessageSquare },
    { number: '25K+', label: 'Reseñas', icon: Award }
  ];

  const team = [
    {
      name: 'William Salcedo',
      role: 'Desarrollador Full stack jr',
      description: 'Estudiante de Tecnologia en desarrollo de software',
      avatar: 'WSL'
    }
  ];

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-logo">
          <Gamepad2 className="about-logo-icon" />
        </div>
        <h1 className="about-title text-gradient">ghostPlayer</h1>
        <p className="about-description">
          La plataforma definitiva para gamers apasionados. Conecta, comparte y descubre 
          el mundo de los videojuegos como nunca antes.
        </p>
      </div>

      <div className="about-mission">
        <div className="about-section-content">
          <h2 className="about-section-title">Nuestra Misión</h2>
          <p className="about-section-text">
            Crear el espacio digital más completo y acogedor para la comunidad gaming hispanohablante. 
            Donde cada jugador, sin importar su plataforma favorita, pueda encontrar su lugar, 
            compartir su pasión y descubrir nuevas experiencias gaming.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="about-section-title">¿Qué Ofrecemos?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <div className="feature-icon">
                  <feature.icon className="icon" />
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-stats">
        <h2 className="about-section-title">Nuestra Comunidad</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                <stat.icon className="icon-lg" />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="about-section-title">Nuestro Equipo</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.avatar}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-tech">
        <div className="about-section-content">
          <h2 className="about-section-title">Tecnología de Vanguardia</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <Zap className="icon text-primary" />
              <span className="tech-label">React + TypeScript</span>
            </div>
            <div className="tech-item">
              <Globe className="icon text-primary" />
              <span className="tech-label">Responsive Design</span>
            </div>
            <div className="tech-item">
              <Shield className="icon text-primary" />
              <span className="tech-label">Seguridad Avanzada</span>
            </div>
          </div>
          <p className="about-section-text">
            Construido con las últimas tecnologías web para ofrecerte la mejor experiencia 
            de usuario, velocidad y seguridad en todos tus dispositivos.
          </p>
        </div>
      </div>

      <div className="about-contact">
        <h2 className="about-section-title">¿Tienes Preguntas?</h2>
        <p className="about-section-text">
          Estamos aquí para ayudarte. Contáctanos y únete a nuestra creciente comunidad gaming.
        </p>
        <div className="contact-buttons">
          <button className="btn btn-primary">Contáctanos</button>
          <button className="btn btn-outline">Únete Ahora</button>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;