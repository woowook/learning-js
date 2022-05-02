// 사용자의 이름을 묻는다.
// 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈를 만들어 출력하고 답을 입력받는다.
// 총 2개의 문제를 입력받고, 답을 맞추면 점수를 +1 한다.
// 사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다.
// 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다.

import fs from 'node:fs';
import { question } from 'readline-sync';

const name = question('이름을 입력하세요.\n');
let ques = '';
let anwser = '';
let score = 0;
for (let i = 2; i > 0; i--) {
  const number1 = Number(question('첫번째 숫자를 입력하세요.: '));
  const number2 = Number(question('두번째 숫자를 입력하세요.: '));
  const sum = number1 + number2;
  ques += `${number1} + ${number2} = ? `;
  console.log(`${number1} + ${number2} = ?`);
  const ans = question('정답을 입력하세요.\n');
  anwser = anwser + ans + ' ';
  if (Number(ans) === sum) {
    score += 1;
  }
}

const data = `${name},${ques},${anwser},${score}\n`;
fs.appendFileSync('./src/score.csv', data);
const readData = fs.readFileSync('./src/score.csv');
console.log(readData.toString());
