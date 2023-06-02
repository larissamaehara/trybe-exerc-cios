const account = {
    agency: '0975',
    bank: {
        cod: '012',
        id: 4,
        name: 'TrybeBank',
    },
};
// Acessar o objeto bank:
// Com notação por ponto
console.log(account.bank); // Resultado do log: { cod: '012', id: 4, name: 'TrybeBank' }

// Com notação por colchetes
console.log(account['bank']); // Resultado do log: { cod: '012', id: 4, name: 'TrybeBank' }

// Acessar a propriedade Name dentro da propriedade bank:
// Com notação por ponto
console.log(account.bank.name); // Resultado do log: TrybeBank

// Com notação por colchetes
console.log(account['bank']['name']); // Resultado do log: TrybeBank