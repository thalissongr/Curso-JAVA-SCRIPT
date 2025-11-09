const Notas = [10,7,3,1,8,2,6,9]

const analisarNotas = () => {
    const maiores = Notas.filter(n => n >= 6)
    const aprovado = maiores.map(n => n = `Aprovado com ` + n)
    const soma = maiores.reduce((acc, vA) => {
        return acc + vA;
        }, 0);

const T = maiores.length
const m = 'A media dos aprovados é ' + soma / T

aprovado.forEach((msg, i) => 
{
    console.log(`Nota: ${maiores[i]} → ${msg}`)
})

 console.log(`Média dos aprovados: ${m}`);
};

analisarNotas();


