// Importação de módulos e estilos
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function LivroDados() {
    // Instância dos controladores de livro e editora
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    // Opções para o seletor de editora
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    // Estados para os campos do formulário
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    // Hook de navegação para redirecionar após a inclusão
    const navigate = useNavigate();

    // Função para tratar alterações no seletor de editora
    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    // Função para incluir um novo livro
    const incluir = (evento) => {
        evento.preventDefault();
        const livro = {
            codigo: 0, // Será atualizado pelo controle ao incluir
            titulo,
            resumo,
            autores: autores.split('\n'), // Divide os autores com base nas quebras de linha
            codEditora
        };
        controleLivro.incluir(livro);
        navigate('/'); // Redireciona de volta para a lista de livros após a inclusão
    };

    // Renderização do componente
    return (
        <main className="container">
            <h1 className="my-4">Inclusão de Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label">Título:</label>
                    <input type="text" className="form-control" value={titulo} onChange={e => setTitulo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo:</label>
                    <textarea className="form-control" value={resumo} onChange={e => setResumo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores:</label>
                    <textarea className="form-control" value={autores} onChange={e => setAutores(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora:</label>
                    <select className="form-select" value={codEditora} onChange={tratarCombo}>
                        {/* Mapeia as opções para o seletor de editora */}
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Incluir</button>
            </form>
        </main>
    );
}

export default LivroDados;
