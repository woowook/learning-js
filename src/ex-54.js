// 54번
// 앞면과 뒷면('h' 그리고 't') 중 임의로 선택한다.
// 사용자에게 어떤 것을 고를지를 요청한다.
// 만약 사용자의 선택과 임의로 선택한 값이 서로 같으면 "You win" 메시지를 출력하고, 그렇지 않다면 "Bad luck" 메시지를 출력하라. 마지막에 컴퓨터가 선택한 것이 무엇인지를 사용자에게 알려줘라.

import { question } from 'readline-sync';

const ht = ['h', 't'];
// 0, 1
const computerChoice = ht[Math.floor(Math.random() * 2)];
// Console.log(computerChoice);

const choice = question('앞면과 뒷면 중 선택하세요( h / t ) : ');
if (choice === computerChoice) {
  console.log('You Win');
} else {
  console.log(`Bad luck.\nThe computer is choice is ${computerChoice}.`);
}
