import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import Title from '../Title';
import { useUserStore } from '../../store/userStore';
import { MemoryRouter } from 'react-router-dom'; 

vi.mock('../../store/userStore', () => ({
  useUserStore: vi.fn(),
}));

vi.mock('../assets/controls.png', () => ({
  default: 'mocked-control-image.png'
}));

describe('Title Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Renderizado con usuario logueado', () => {
    beforeEach(() => {
      useUserStore.mockReturnValue({
        name: 'Juan Pérez'
      });
    });

    const renderWithRouter = () => render(
      <MemoryRouter>
        <Title />
      </MemoryRouter>
    );

    it('debe renderizar el mensaje de bienvenida con el nombre del usuario', () => {
      renderWithRouter();
      expect(screen.getByText('Bienvenido Juan Pérez')).toBeInTheDocument();
    });

    it('debe mostrar el título principal', () => {
      renderWithRouter();
      expect(screen.getByText('TU COMUNIDAD GAMER EN UN SOLO LUGAR')).toBeInTheDocument();
    });

    it('debe mostrar la descripción del sitio', () => {
      renderWithRouter();
      expect(screen.getByText('Un foro de discución y una tienda para todos tus juegos y accesorios de consola.')).toBeInTheDocument();
    });

    it('debe renderizar ambos botones', () => {
      renderWithRouter();
      expect(screen.getByText('Unirse al foro')).toBeInTheDocument();
      expect(screen.getByText('Tienda')).toBeInTheDocument();
    });
  });
});

