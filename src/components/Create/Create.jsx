import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Create({ livros, setLivros }) {

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [ano, setAno] = useState('')

    const navigate = useNavigate()

    const getNextId = () => {
        livros.sort((a, b) => a.id - b.id)
        const lastUser = livros[livros.length - 1]
        return lastUser.id + 1
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const novoLivro = {
            id: getNextId(),
            titulo,
            autor,
            ano
        }

        setLivros([...livros, novoLivro])
        navigate("/")
    }

    return (
        <div>
            <h1>Criar Novo Livro</h1>
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
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}

export default Create