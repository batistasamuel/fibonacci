// Números que pertencem e que nao pertencem à Série de Fibonacci
const numero = {
    pertence: 8,
    naopertence:9
};

function isFibonacci(numero) {
    var Fn = {
        indices: [],
        estaNaLista: []
    }
    let F = 0;
    let i = 1;
    while (F < 350) {
        F = Math.round(((((1+Math.sqrt(5))/2)**i) - (((1-Math.sqrt(5))/2)**i))/(Math.sqrt(5)));
        Fn.indices.push(F)
        i++;
    }
    
    if (Fn.indices.indexOf(numero) != -1) {
        Fn.estaNaLista.push(true);
    } else {
        Fn.estaNaLista.push(false);
    }
    return Fn;
}

const resultadoTrue = (isFibonacci(numero.pertence));
const resultadoFalse = (isFibonacci(numero.naopertence));
console.log(`\nA pesquisa sobre o número ${numero.pertence} retornou: ${resultadoTrue.estaNaLista} \n`);
console.log(`\nA pesquisa sobre o número ${numero.naopertence} retornou: ${resultadoFalse.estaNaLista} \n`);
console.log(`Esta é a sequência de fibonacci até passar 350: \n${JSON.stringify(resultadoTrue.indices)}`);

module.exports = isFibonacci