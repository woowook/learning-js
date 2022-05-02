// Books.csv 파일을 사용하며, 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고 입력한 만큼 추가할 수 있도록 한다.
// 모든 데이터가 추가된 후에 사용자에게 검색할 저자의 이름을 입력하라고 요청하고, 입력된 저자의 모든 책 정보를 출력한다.
// 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력하라.

import fs from 'node:fs';
import { questionInt, question } from 'readline-sync';

const number = questionInt('몇 개의 레코드를 추가하시겠습니까? : ');
for (let i = 0; i < number; i++) {
  const title = question('제목을 입력해주세요 : ');
  const author = question('저자를 입력해주세요 : ');
  const date = question('발행년도를 입력해주세요 : ');
  const data = `\n${title}, ${author}, ${date}`;
  fs.appendFileSync('./src/books.csv', data, 'utf8');
}

const searchAuthor = question('검색할 저자의 이름을 입력하세요 : ');

const data = fs.readFileSync('./src/books.csv', 'utf-8').toString().split('\n');

console.log(data);

const search = [];
for (const elements of data) {
  const arrayData = elements.toString().split(', ');
  if (arrayData[1].toLowerCase() === searchAuthor.toLowerCase()) {
    search.push(arrayData);
  }
}

if (search.length === 0) {
  console.log('해당하는 저자의 책이 없습니다.');
} else {
  for (const element of search) {
    console.log(element[0]);
  }
}
