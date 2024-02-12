// Livro.ts
// Definição da classe Livro que representa um livro.

export class Livro {
  // Construtor da classe Livro, que recebe um código, código da editora, título, resumo e autores.
  constructor(
    public codigo: number,
    public codEditora: number,
    public titulo: string,
    public resumo: string,
    public autores: string[]
  ) {}
}
