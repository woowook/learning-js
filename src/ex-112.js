// 112
// 111번 프로그램에서 만든 Books.csv 파일을 사용한다. 사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다. csv 파일의 각 행을 한 줄에 하나씩 출력하라.

import fs from 'node:fs';
import { question } from 'readline-sync';

fs.readFile('./src/books.csv', 'utf-8', function (error) {
  if (error) {
    console.log('error');
  } else {
    // Console.log(data);
  }
});

const title = question('제목을 입력해주세요 : ');
const author = question('작가를 입력해주세요 : ');
const date = question('발행년도를 입력해주세요 : ');
const data = `\n${title}, ${author}, ${date}`;

fs.appendFile('./src/books.csv', data, 'utf8', function (error) {
  if (error) {
    console.log('에러');
  } else {
    const array = fs.readFileSync('./src/books.csv').toString().split('\n');
    for (const value of Object.values(array)) {
      console.log(`${value}`);
    }
  }
});
