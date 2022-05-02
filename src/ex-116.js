// Books.csv 파일의 데이터를 배열로 가져온다. 사용자에게 배열을 표시하고, 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다.
// 또한, 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.

import fs from 'node:fs';
import { question, questionInt } from 'readline-sync';

const data = fs.readFileSync('./src/books.csv', 'utf-8').toString().split('\n');

console.log(data.length);
console.log(data);

for (let i = 1; i < data.length; i++) {
  console.log(`${i}. ${data[i]}`);
}

// Const search = [];
// let number = 1;
// for (const elements of data) {
//   const arrayData = elements.toString().split(', ');
//   search.push(arrayData);
//   console.log(`${number}. ${arrayData}`);
//   number += 1;
// }

const rowDelete = questionInt('삭제하고 싶은 행의 번호를 입력하세요 : ');
if (rowDelete > data.length - 1) {
  console.log('삭제할 행의 번호를 다시 확인해주세요.');
} else {
  data.splice(rowDelete, 1);
}

for (let i = 1; i < data.length; i++) {
  console.log(`${i}. ${data[i]}`);
}

const rowUpdate = questionInt('수정하고 싶은 데이터를 선택하세요 : ');
if (rowUpdate > data.length - 1) {
  console.log('수정할 행의 번호를 다시 확인해주세요.');
} else {
  const updateString = question(
    '수정할 내용을 입력해주세요. (ex: 제목, 저자, 발행년도)\n'
  );
  data.splice(rowUpdate, 1, updateString);
  // Console.log(data);
}

let newData = '';
for (const element of data) {
  newData += element + '\n';
}

fs.writeFileSync('./src/books.csv', newData, 'utf-8');
