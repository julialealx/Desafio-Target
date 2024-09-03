let numero = 32;

function pertenceFibonacci(n) {
    let a = 0;
    let b = 1;
    let temp;

    while (a < n) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return a === n;
}

if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}