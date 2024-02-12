// ControleLivros.ts
import { Livro } from '../modelo/Livro';

// Array de objetos Livro que representa os livros existentes
let livros: Livro[] = [
  new Livro(1, 1, 'A Jornada do Viajante', 'Um viajante solitário parte em uma jornada épica através de terras mágicas, enfrentando desafios, fazendo descobertas surpreendentes e aprendendo valiosas lições de vida.', ['A. A. Aventureiro']),
  new Livro(2, 2, 'A Última Canção de Luiza', 'Uma emocionante história de amor, música e superação. Uma jovem talentosa busca sua verdadeira voz em meio a desafios pessoais e obstáculos do mundo da música.', ['Botelho.P']),
  new Livro(3, 3, 'As Sombras do Passado', 'Um mistério envolvente que se desenrola em uma cidade antiga. Um detetive corajoso mergulha nos segredos do passado para desvendar um enigma que assombra a comunidade.', ['Enigma Editorial']),
];

export class ControleLivro {
  // Método para obter a lista completa de livros
  obterLivros() {
    return livros;
  }

  // Método para incluir um novo livro à lista
  incluir(livro: Livro) {
    const maxCodigo = Math.max(...livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    livros.push(livro);
  }

  // Método para excluir um livro da lista com base no código
  excluir(codigo: number) {
    const index = livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
