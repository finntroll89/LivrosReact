// ControleEditora.ts
import { Editora } from '../modelo/Editora';

// Array de objetos Editora que representa as editoras existentes
let editoras: Editora[] = [
  new Editora(1, 'Mundo Fantástico Editora'),
  new Editora(2, 'Harmonia Literária'),
  new Editora(3, 'S. S. Sherlock'),
];

export class ControleEditora {
  // Método para obter o nome da editora com base no código da editora
  getNomeEditora(codEditora: number) {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }

  // Método para obter a lista completa de editoras
  getEditoras() {
    return editoras;
  }
}
