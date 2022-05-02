// Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다. 입력된 두 년도 사이에 출간된 모든 책을 출력하라.

import fs from 'node:fs';
import { question } from 'readline-sync';

const data = fs.readFileSync('./src/books.csv', 'utf8').toString().split('\n');
const array = data.toString().split(',');
console.log(array);

const startDate = question('시작 년도를 입력하세요 : ');
const endDate = question('끝 년도를 입력하세요 : ');

