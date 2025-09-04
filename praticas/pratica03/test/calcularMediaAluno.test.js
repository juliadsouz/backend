const { calcularMediaAluno, notaindefinida, notanegativa, a3indefinido, a3negativo, substituira2, substituira1 } = require('../src/calcularMediaAluno');

test ("a1 + a2 + a3 = 0", () => {
    expect (calcularMediaAluno).toBeDefined ()
})

test("Se a1 ou a2 = undefined", () => {
    expect(() => notaindefinida(6,undefined)).toThrow("Notas a1 ou a2 não informadas")
    expect(() => notaindefinida(undefined,6)).toThrow("Notas a1 ou a2 não informadas")
       
});

test("Se a1 ou a2 = -1", () => {
    expect(() => notanegativa(6,-1)).toThrow("Notas a1 ou a2 não podem ser negativas")
    expect(() => notanegativa(-1,6)).toThrow("Notas a1 ou a2 não podem ser negativas")
       
});

test("Se a3 = undefined" , () => {
    expect(a3indefinido(2,2,undefined)).toBeCloseTo(2)
   
       
});

test("Se a3 = -1", () => {
    expect(() => a3negativo(6,6,-1)).toThrow("Nota a3 não pode ser negativa")
  
       
});

test("Se (a1 * 0.4 + a2 * 0.6) < (a1 * 0.4 + a3 * 0.6)", () => {
    expect(substituira2(6,4,7)).toBeCloseTo(6.6)
  
       
});

test("Se (a1 * 0.4 + a2 * 0.6) < (a3 * 0.4 + a3 * 0.6)", () => {
    expect(substituira1(4,5,8)).toBeCloseTo(6.2)
  
       
});

