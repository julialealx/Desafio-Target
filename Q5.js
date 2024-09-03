let str = "Desafio Target";

function inverterString(s) {
    let resultado = "";
    for (let i = s.length - 1; i >= 0; i--) {
        resultado += s[i];
    }
    return resultado;
}

let stringInvertida = inverterString(str);
console.log(`Original: ${str}`);
console.log(`Invertida: ${stringInvertida}`);