class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // para calcular a categoria do atleta;
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return 'Infantil';
    } else if (this.idade >= 12 && this.idade <= 13) {
      return 'Juvenil';
    } else if (this.idade >= 14 && this.idade <= 15) {
      return 'Intermediário';
    } else if (this.idade >= 16 && this.idade <= 30) {
      return 'Adulto';
    } else {
      return 'Sem categoria';
    }
  }

  // para calcular o IMC do atleta;
   calculaIMC() { 
    return this.peso / (this.altura * this.altura);
  } 

  //para calcular a média válida do atleta.
  calculaMediaValida() { 
    let notas = this.notas;
    notas.sort((a, b) => a - b);
    notas = notas.slice(1, 4);
    return notas.reduce((a, b) => a + b) / notas.length;
  }

  // que retorna o nome do atleta
  obtemNomeAtleta() { 
    return this.nome;
  }

  // que retorna a idade do atleta
  obtemIdadeAtleta() { 
    return this.idade;
  }

  // que retorna o peso do atleta
  obtemPesoAtleta() { 
    return this.peso;
  }
  
  // que retorna a altura do atleta
  obtemAlturaAtleta() {
    return this.altura;
  }

  // que retorna as notas do atleta
  obtemNotasAtleta() {
    return this.notas.join(',');
  } 

  // que retorna a categoria do atleta
   obtemCategoria() { 
    return this.calculaCategoria();
  } 
  
  // que retorna o IMC do atleta
  obtemIMC() {
    return this.calculaIMC();
  } 
  
  // que retorna a média válida do atleta
   obtemMediaValida() { 
    return this.calculaMediaValida();
  }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
  30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]);

// Exemplo de saída
console.log('Nome:', atleta.obtemNomeAtleta()); // Nome: Cesar Abascal
console.log('Idade:', atleta.obtemIdadeAtleta()); // Idade: 30
console.log('Peso:', atleta.obtemPesoAtleta()); // Peso: 80 
console.log('Altura:', atleta.obtemAlturaAtleta()); // Altura: 1.7
console.log('Notas:', atleta.obtemNotasAtleta()); // Notas: 10,9.34,8.42,10,7.88
console.log('Categoria:', atleta.obtemCategoria()); // Categoria: Adulto
console.log('IMC:', atleta.obtemIMC()); // IMC: 27.68166089965398
console.log('Média válida:', atleta.obtemMediaValida()); // Média válida: 9,25333333