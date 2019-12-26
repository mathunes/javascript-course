let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Antunes',
    idade: 20,
    social: {
        facebook: 'Matheus Antunes',
        github: 'mathunes'
    },

    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    },
}

console.log(pessoa.nomeCompleto());

let {nome:pessoaNome = 'Teste', sobrenome, idade} = pessoa;

console.log(pessoaNome);

let {facebook, github} = pessoa.social;

console.log(github);