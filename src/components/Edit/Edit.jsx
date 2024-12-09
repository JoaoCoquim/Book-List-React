import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Edit({ livros, setLivros }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontrar o livro a ser editado
  const livro = livros.find(l => l.id === parseInt(id, 10));

  // Estados para formulário
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  useEffect(() => {
    if (livro) {
      setTitulo(livro.titulo);
      setAutor(livro.autor);
      setAno(livro.ano);
    }
  }, [livro]);

  if (!livro) {
    return <div>Livro não encontrado. <Link to="/">Voltar</Link></div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const livroAtualizado = {
      ...livro,
      titulo,
      autor,
      ano: parseInt(ano, 10)
    };

    const index = livros.findIndex(l => l.id === livro.id);
    const novaLista = [...livros];
    novaLista[index] = livroAtualizado;

    setLivros(novaLista);
    navigate('/');
  };

  return (
    <div>
      <h1>Editar Livro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título: </label>
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Autor: </label>
          <input
            type="text"
            value={autor}
            onChange={e => setAutor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ano: </label>
          <input
            type="number"
            value={ano}
            onChange={e => setAno(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Edit;
