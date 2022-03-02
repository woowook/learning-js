// 58번
// 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문(즉, [숫자1] + [숫자2])이 나오는 수학 퀴즈를 만들자.
// 사용자에게 답을 입력하라고 요청하고 정답을 맞히면 점수를 증가하라.
// 퀴즈가 끝나면 다섯 문제 중에 몇 개를 맞혔는지 출력하라.

import { question } from 'readline-sync';

let score = 0;

for (let i = 1; i < 6; i++) {
  const rand1 = Math.floor(Math.random() * 100) + 1;
  const rand2 = Math.floor(Math.random() * 100) + 1;
  const sum = rand1 + rand2;
  console.log(`\n${i}번 문제. ${rand1} + ${rand2} = ??`);
  const answer = Number(question('정답을 입력하세요 : '));

  if (sum === answer) {
    score += 1;
  } else {
    continue;
  }
}

console.log(`총 맞춘 문제 : ${score}`);
