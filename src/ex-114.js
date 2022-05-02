// Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다. 입력된 두 년도 사이에 출간된 모든 책을 출력하라.

import fs from 'node:fs';
import { questionInt } from 'readline-sync';

const startDate = questionInt('시작 년도를 입력하세요 : ');
const endDate = questionInt('끝 년도를 입력하세요 : ');

const data = fs.readFileSync('./src/books.csv', 'utf-8').toString().split('\n');

const search = [];
for (const elements of data) {
  const arrayData = elements.toString().split(', ');
  if (Number(arrayData[2]) >= startDate && Number(arrayData[2]) <= endDate) {
    search.push(arrayData);
  }
}

if (search.length === 0) {
  console.log('발행년도에 해당하는 책이 없습니다.');
} else {
  for (const element of search) {
    console.log(element[0]);
  }
}
