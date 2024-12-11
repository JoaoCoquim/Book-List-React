import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

function Home({ livros, setLivros }) {

    const handleDelete = (id) => {
        const novosLivros = livros.filter(livro => livro.id !== id);
        setLivros(novosLivros);
    };

    return (
        <div>
            <h1>Book List</h1>
            <Link to="/create" className={styles.addBtn}>Add New Book</Link>
            <ul>
                {livros.map(livro => (
                    <li key={livro.id}>

                        <Link to={`/view/${livro.id}`}>
                            {livro.titulo} - {livro.autor} ({livro.ano})
                        </Link>
                        {" | "}
                        <Link to={`/edit/${livro.id}`} className={styles.editBtn}>Edit</Link>
                        {" | "}
                        <button className={styles.deleteBtn} onClick={() => handleDelete(livro.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home