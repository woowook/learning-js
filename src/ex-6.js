import { question } from 'readline-sync';

const pizzaPieces = question('피자의 총 조각 개수 : ');
const atePizza = question('먹은 피자 조각 개수 : ');
const remainPizza = Number(pizzaPieces) - Number(atePizza);
console.log(`남은 피자 개수 : ${remainPizza}`);
