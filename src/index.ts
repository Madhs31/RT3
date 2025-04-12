import { Soma, Subtracao, Multiplicacao, Divisao } from 'modulo-RT3';

const a = 10;
const b = 5;

console.log('🧪 Testes:');


console.log(`Soma: ${a} + ${b} =`, new Soma().calcular(a, b)); 
console.log(`Subtração: ${a} - ${b} =`, new Subtracao().calcular(a, b)); 
console.log(`Multiplicação: ${a} * ${b} =`, new Multiplicacao().calcular(a, b)); 
console.log(`Divisão: ${a} / ${b} =`, new Divisao().calcular(a, b)); 
