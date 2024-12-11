import React from 'react'
import {useParams, Link } from 'react-router-dom'
import styles from './View.module.css'

function View({ livros }) {

    const { id } = useParams(); // Vai buscar ao URL
    const livro = livros.find(l => l.id === parseInt(id, 10));

    if (!livro) {
        return <div>Livro não encontrado. <Link to="/">Voltar</Link></div>;
      }
      
    return (
        <div className={styles.container}>
            <h1>Book Details</h1>
            <p><strong>Title:</strong> {livro.titulo}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Year:</strong> {livro.ano}</p>
            <Link to={`/edit/${livro.id}`} className={styles.editBtn}>Edit</Link>
            <Link to="/" className={styles.returnBtn}>Return To List</Link>
        </div>
    )
}

export default View