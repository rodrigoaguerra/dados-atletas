# Projeto de certificação 2 – Dados dos atletas

### Resumo do projeto

Crie uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.

### Introdução

Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.

### Resolução
Primeiramente foi criada uma classe chamada Atleta para a criação de um objeto atleta.
```javascript
class Atleta {
  // atributos e métodos da classe Atleta
}
```

A classe contém os seguintes atributos:
- nome
- idade
- peso
- altura
- notas

A classe contém os seguintes métodos:
- calculaCategoria(), para calcular a categoria do atleta;
- calculaIMC(), para calcular o IMC do atleta;
- calculaMediaValida(), para calcular a média válida do atleta.
- obtemNomeAtleta(), que retorna o nome do atleta
- obtemIdadeAtleta(), que retorna a idade do atleta
- obtemPesoAtleta(), que retorna o peso do atleta
- obtemAlturaAtleta(), que retorna a altura do atleta
- obtemNotasAtleta(), que retorna as notas do atleta
- obtemCategoria(), que retorna a categoria do atleta
- obtemIMC(), que retorna o IMC do atleta
- obtemMediaValida(), que retorna a média válida do atleta

Em seguinda, foi declarado um objeto atleta para a utilização da classe:
```javascript
const atleta = new Atleta("Cesar Abascal",
  30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]);
```

Após a declaração do objeto atleta, foram feitas as impressões dos dados do atleta no console:
```javascript
console.log('Nome:', atleta.obtemNomeAtleta()); // Nome: Cesar Abascal
console.log('Idade:', atleta.obtemIdadeAtleta()); // Idade: 30
console.log('Peso:', atleta.obtemPesoAtleta()); // Peso: 80 
console.log('Altura:', atleta.obtemAlturaAtleta()); // Altura: 1.7
console.log('Notas:', atleta.obtemNotasAtleta()); // Notas: 10,9.34,8.42,10,7.88
console.log('Categoria:', atleta.obtemCategoria()); // Categoria: Adulto
console.log('IMC:', atleta.obtemIMC()); // IMC: 27.68166089965398
console.log('Média válida:', atleta.obtemMediaValida()); // Média válida: 9,25333333
```

### Comando para execução do código
```bash
node dados-atletas.js
```