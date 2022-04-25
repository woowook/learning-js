// ‘Names.txt’ 파일을 연다. 사용자에게 새로운 이름을 입력하라고 요청한다.
// 입력된 이름을 파일의 끝에 추가하고(파일에 저장) 전체 파일을 출력하라.

import fs from 'node:fs';
import { question } from 'readline-sync';

fs.readFile('./src/Names.txt', 'utf-8', function (error, data) {
  if (error) {
    console.log('error');
  } else {
    console.log(data);
  }
});

const name = question('추가할 이름을 입력하세요 : ');
const data = `\n${name}`;
fs.appendFile('./src/Names.txt', data, 'utf-8', function (error) {
  if (error) {
    console.log('error');
  }
});
