// 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하라.
// 프로그램을 여러 번 실행하여 옵션들을 테스트하라.

import fs from 'node:fs';
import { question } from 'readline-sync';

const names = fs.readFileSync('./src/Names.txt').toString().split('\n');
console.log(names);

const name = question('목록의 이름 중 하나를 입력하세요  : ');
let newNames = '';

for (const element of names) {
  // If (element === name) {
  //   console.log('DDDDD');
  // } else {
  //   newNames += element + '\n';
  //   console.log(newNames);
  // }
  if (element !== name) {
    newNames += element + '\n';
  }
}

fs.writeFile('./src/Names2.txt', newNames, 'utf-8', function (error) {
  if (error) {
    console.log('파일 쓰기 에러');
  } else {
    console.log('파일 쓰기 완료');
  }
});
