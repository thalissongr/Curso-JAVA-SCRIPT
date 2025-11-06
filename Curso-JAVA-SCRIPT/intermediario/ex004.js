const num = [10 ,50 ,73,43,68 ,85,1]

const maiores = num.filter(num => num > 50)
const pares = num.filter(num => num % 2 === 0)
const dobrar = pares.map(pares => pares * 2)
const soma = maiores.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);
const T = maiores.length
const m = soma / T

console.log("Números maiores que 50:" + maiores)
console.log("Pares:" + pares)
console.log("Quadrado:" + dobrar)
console.log("Media:" + m.toFixed(1))