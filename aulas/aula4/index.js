
function soma(a,b) {
    return a+b;
}



function subtração(a,b) {
    return a + b * - 1;
}



function multiplicação(a,b) {
    return a * b ;
}


function divisao(a,b) {
if (b === 0) return undefined
else return a/b ;
}

export {soma,subtração,multiplicação,divisao};