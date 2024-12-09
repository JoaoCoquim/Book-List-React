import React from 'react'
import { Link } from 'react-router-dom';

function Home({ livros, setLivros }) {

    const handleDelete = (id) => {
        const novosLivros = livros.filter(livro => livro.id !== id);
        setLivros(novosLivros);
    };

    return (
        <div>
            <h1>Lista de Livros</h1>
            <Link to="/create">Adicionar Novo Livro</Link>
            <ul>
                {livros.map(livro => (
                    <li key={livro.id}>

                        <Link to={`/view/${livro.id}`}>
                            {livro.titulo} - {livro.autor} ({livro.ano})
                        </Link>
                        {" | "}
                        <Link to={`/edit/${livro.id}`}>Editar</Link>
                        {" | "}
                        <button onClick={() => handleDelete(livro.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home