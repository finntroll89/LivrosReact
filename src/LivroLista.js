// Importação de módulos e estilos
import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Instâncias dos controladores de livro e editora
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

// Componente LinhaLivro
const LinhaLivro = (props) => {
  // Obtém o nome da editora com base no código da editora do livro
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td>
        <div>{props.livro.titulo}</div>
        {/* Botão de exclusão com estilo Bootstrap */}
        <button onClick={props.excluir} className="btn btn-danger btn-excluir">Excluir</button>
      </td>
      <td>{props.livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {/* Lista de autores com estilo Bootstrap */}
        <ul className="autores-list">
          {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

// Componente LivroLista
export default function LivroLista() {
  // Estados para a lista de livros e controle de carregamento
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // Efeito para carregar os livros ao montar o componente
  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado]);

  // Função para excluir um livro
  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  }

  // Renderização do componente
  return (
    <main className="container">
      <h1 className="text-center">Catálogo de Livros</h1>
      {/* Tabela com estilo Bootstrap */}
      <table className="table">
        <thead style={{ backgroundColor: 'black', color: 'white' }}>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia os livros para o componente LinhaLivro */}
          {livros.map(livro => <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />)}
        </tbody>
      </table>
    </main>
  );
}
