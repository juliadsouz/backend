module.exports = { calcularMediaAluno, notaindefinida, notanegativa, a3indefinido, a3negativo, substituira2, substituira1};


function calcularMediaAluno(a1, a2, a3) {
    return 0;
}
function notaindefinida (a1, a2) {
    if (a1 === undefined || a2 === undefined) {
        throw Error("Notas a1 ou a2 não informadas");
    }
}

function notanegativa (a1, a2) {
    if (a1 < 0 || a2 < 0) {
        throw Error("Notas a1 ou a2 não podem ser negativas");
    }
}

function a3indefinido (a1, a2, a3) {
    if (a3 === undefined)
        return (a1 * 0.4) + (a2 * 0.6)
};

function a3negativo (a1,a2,a3) {
    if (a3 < 0)
        throw new Error("Nota a3 não pode ser negativa")
};


function substituira2 (a1,a2,a3) {
        calculo1 = (a1 * 0.4 + a2 * 0.6)
        calculo2 = (a1 * 0.4 + a3 * 0.6)
    
        return Math.max(calculo1,calculo2)
};

function substituira1 (a1,a2,a3) {
    calculo1 = (a1 * 0.4 + a2 * 0.6)
    calculo2 = (a3 * 0.4 + a2 * 0.6)

    return Math.max(calculo1,calculo2)
};

