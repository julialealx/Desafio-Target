const faturamentoDiario = [
    { "dia": 1, "valor": 178.333 },
    { "dia": 2, "valor": 322.000 },
    { "dia": 3, "valor": 32.000 },
    { "dia": 4, "valor": 0.0 },  
    { "dia": 5, "valor": 0.0 },  
    { "dia": 6, "valor": 740.000 },
    { "dia": 7, "valor": 0.0 },  
    { "dia": 8, "valor": 100.000 },
    { "dia": 9, "valor": 242.000 },
    { "dia": 10, "valor": 987.000 },
    { "dia": 11, "valor": 0.0 },  
    { "dia": 12, "valor": 0.0 },  
    { "dia": 13, "valor": 1234.0000 },
    { "dia": 14, "valor": 0.0 },  
    { "dia": 15, "valor": 455.000 },
    { "dia": 16, "valor": 0.0 }, 
    { "dia": 17, "valor": 0.0 },  
    { "dia": 18, "valor": 1234.0000 },
    { "dia": 19, "valor": 1254.000 },
    { "dia": 20, "valor": 20000.0 },
    { "dia": 21, "valor": 0.0 },  
    { "dia": 22, "valor": 999.999 },
    { "dia": 23, "valor": 0.0 },  
    { "dia": 24, "valor": 234.555},
    { "dia": 25, "valor": 0.0 },  
    { "dia": 26, "valor": 987.000 },
    { "dia": 27, "valor": 0.0 },  
    { "dia": 28, "valor": 0.0 },  
    { "dia": 29, "valor": 788.000 },
    { "dia": 30, "valor": 0.0 },  
];

let menorFaturamento = Number.MAX_VALUE;
let maiorFaturamento = Number.MIN_VALUE;
let somaFaturamento = 0;
let diasComFaturamento = 0;

faturamentoDiario.forEach(dia => {
    if (dia.valor > 0) {  
        if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
        if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;
        somaFaturamento += dia.valor;
        diasComFaturamento++;
    }
});

const mediaMensal = somaFaturamento / diasComFaturamento;

let diasAcimaDaMedia = faturamentoDiario.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);