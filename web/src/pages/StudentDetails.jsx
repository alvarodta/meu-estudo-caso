import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

export default function StudentDetails() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarAluno() {
      try {
        const resposta = await api.get(`/alunos/${id}`);
        setAluno(resposta.data);
      } catch (e) {
        setErro('Não foi possível carregar os dados do aluno.');
      } finally {
        setCarregando(false);
      }
    }

    buscarAluno();
  }, [id]);

  if (carregando) {
    return (
      <div className="wrap">
        <h1>Detalhes do Aluno</h1>
        <p>Carregando...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="wrap">
        <h1>Detalhes do Aluno</h1>
        <p className="erro">{erro}</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  if (!aluno) {
    return (
      <div className="wrap">
        <h1>Detalhes do Aluno</h1>
        <p>Aluno não encontrado.</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="wrap">
      <h1>Detalhes do Aluno</h1>
      <p><strong>ID:</strong> {aluno.id}</p>
      <p><strong>Nome:</strong> {aluno.nome}</p>
      <p><strong>E-mail:</strong> {aluno.email}</p>
      {aluno.matricula && <p><strong>Matrícula:</strong> {aluno.matricula}</p>}
      <Link to="/">Voltar</Link>
    </div>
  );
}
