import { soma,subtração,multiplicação,divisao } from "./index.js";

console.log("Teste da função soma()")
if (soma (2,2) === 4) console.log("Passou 1º")
else console.log("Falhou 1º");


if (soma(-1,2) === 1) console.log("Passou 2º")
    else console.log("Falhou 2º"); 

if (soma(2,0) === 2) console.log("Passou 3º")
    else console.log("Falhou 3º"); 

console.log("Teste da função subtração()")
if (subtração(4,2) === 2) console.log("Passou 4º")
    else console.log("Falhou 4º")

if (subtração(-2,2) === -4) console.log("Passou 5º")
    else console.log("Falhou 5º")

if (subtração(-2,0) === -2) console.log("Passou 6º")
    else console.log("Falhou 6º")

console.log("Teste da função multiplicação()")
if (multiplicação(4,2) === 8) console.log("Passou 7º")
    else console.log("Falhou 7º")

if (multiplicação(-2,-2) === 4) console.log("Passou 8º")
    else console.log("Falhou 8º")

if (multiplicação(-2,0) === 0) console.log("Passou 9º")
    else console.log("Falhou 9º")


console.log("Teste da função divisão()")
if (divisao(4,2) === 2) console.log("Passou 10º")
    else console.log("Falhou 10º")

if (divisao(4,-2) === -2) console.log("Passou 11º")
    else console.log("Falhou 11º")

if (divisao(4,0) === undefined) console.log("Passou 12º")
    else console.log("Falhou 12º")
