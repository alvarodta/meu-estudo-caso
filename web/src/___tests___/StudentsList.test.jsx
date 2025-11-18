import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudentsList from '../pages/StudentsList'; 
import api from '../api';

vi.mock('../api');

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe('StudentsList', () => {
  it('exibe mensagem de carregando inicialmente', () => {
    api.get.mockResolvedValueOnce({ data: [] });

    renderWithRouter(<StudentsList />);

    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
  });

  it('renderiza a lista de alunos após o carregamento', async () => {
    api.get.mockResolvedValueOnce({
      data: [
        { id: 1, nome: 'Aluno Teste', email: 'teste@example.com' },
        { id: 2, nome: 'Outro Aluno', email: 'outro@example.com' },
      ],
    });

    renderWithRouter(<StudentsList />);

    
    await waitFor(() => {
      expect(screen.getByText('Aluno Teste')).toBeInTheDocument();
      expect(screen.getByText('Outro Aluno')).toBeInTheDocument();
    });

    
    expect(screen.getAllByText(/Ver detalhes/i).length).toBeGreaterThan(0);
  });

  it('exibe mensagem de erro quando a API falha', async () => {
    api.get.mockRejectedValueOnce(new Error('Erro na API'));

    renderWithRouter(<StudentsList />);

    await waitFor(() => {
      expect(
        screen.getByText(/Não foi possível carregar a lista de alunos/i)
      ).toBeInTheDocument();
    });
  });
});
