const isFibonacci = require('./is_Fibonacci')
describe('A função isFibonacci deveria listar os elementos da Série de Fibonacci até passar 350 e também retornar um boolean para um número verificando se ele pertence ou nao à Serie de Fibonacci', () => {
    test('Retornar os elementos da Série de Fibonacci até passar 350', () => {
        expect(isFibonacci(8)).toMatchObject({
            indices: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
        })
    })
    test('Retornar true para um número que pertence à Serie de Fibonacci', () => {
        expect(isFibonacci(8)).toMatchObject({
            estaNaLista: [true,]
        })
    })
    test('Retornar false para um número que nao pertence à Serie de Fibonacci', () => {
        expect(isFibonacci(9)).toMatchObject({
            estaNaLista: [false,]
        })
    })
})