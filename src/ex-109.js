// 사용자에게 다음과 같이 메뉴를 표시하라

// 1. Create a new file
// 2. Display the file
// 3. Add a new item to the file Make a selection 1, 2 or 3:

// 사용자에게 1, 2 또는 3을 입력하라고 요청한다. 다른 것을 입력한다면 에러 메시지를 출력한다.
// 만약 1을 선택하면 과목명을 입력하라고 요청하고, 그것을 ‘Subject.txt'라는 이름의 새로운 파일에 저장한다. 기존 파일이 있다면 새 파일로 덮어쓰게 된다
// 2를 선택하면 'Subject.txt' 파일의 내용을 출력한다
// 3을 선택하면 새로운 과목명을 입력하라고 요청하고, 그것을 파일에 저장한 후에 파일의 전체 내용을 출력 한다.

import fs from 'node:fs';
import { question } from 'readline-sync';

console.log('1. Create a new file.');
console.log('2. Display the file.');
const selection = Number(
  question('3. Add a new item to the file Make a selection 1, 2 or 3 : ')
);

switch (selection) {
  case 1: {
    const subject = question('과목 입력 : ');
    fs.writeFileSync('./src/Subject.txt', subject, 'utf-8');

    break;
  }

  case 2: {
    const txt = fs.readFileSync('./src/Subject.txt', 'utf-8');
    console.log(txt);

    break;
  }

  case 3: {
    const subject1 = question('새로운 과목을 입력하세요 : ');
    const newSubject = '\n' + subject1;
    fs.appendFileSync('./src/Subject.txt', newSubject, 'utf-8');
    const text = fs.readFileSync('./src/Subject.txt', 'utf-8');
    console.log(text);

    break;
  }

  default:
    console.log('잘못 입력 하셨습니다.');
}
