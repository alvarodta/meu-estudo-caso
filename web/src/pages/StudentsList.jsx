import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function StudentsList() {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarAlunos() {
      try {
        const resposta = await api.get('/alunos');
        setAlunos(resposta.data);
      } catch (e) {
        setErro('Não foi possível carregar a lista de alunos.');
      } finally {
        setCarregando(false);
      }
    }

    buscarAlunos();
  }, []);

  if (carregando) {
    return (
      <div className="wrap">
        <h1>Lista de Alunos</h1>
        <p>Carregando...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="wrap">
        <h1>Lista de Alunos</h1>
        <p className="erro">{erro}</p>
      </div>
    );
  }

  return (
    <div className="wrap">
      <h1>Lista de Alunos</h1>
      <table className="tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>
                <Link to={`/aluno/${aluno.id}`}>Ver detalhes</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
