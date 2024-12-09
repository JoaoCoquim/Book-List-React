import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import listaLivrosJSON from './assets/listaLivros.json'
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import View from './components/View/View';
import Edit from './components/Edit/Edit';

function App() {

  const [livros, setLivros] = useState(listaLivrosJSON);

  return (<>
      <Routes>
        <Route path="/" element={<Home livros={livros} setLivros={setLivros} />} />
        <Route path="/create" element={<Create livros={livros} setLivros={setLivros} />} />
        <Route path="/view/:id" element={<View livros={livros} />} />
        <Route path="/edit/:id" element={<Edit livros={livros} setLivros={setLivros} />} />
        <Route path="*" element={<div style={{color: 'red', fontSize: '2rem'}}>404 NOT FOUND</div>} />
      </Routes>
  </>)
}

export default App
