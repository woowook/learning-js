/* 사용자의 나이를 묻자.
만약 18세 이상이면 "You can vote"라는 메시지를 표시하라.
만약 17세라면 "You can learn to drive"2 는 메시지를 표시하라.
만약 16세 라면 "You can buy a lottery ticket"이라는 메시지를 표시하라.
만약 16세 미만이라면 "You can go Trick-or-Treating"이라는 메시지를 표시하라.
*/

import { question } from 'readline-sync';

const inputAge = Number(question('현재 나이를 입력하세요 : '));

if (inputAge >= 18) {
  console.log('You can vote.');
} else if (inputAge === 17) {
  console.log('you can learn to drive.');
} else if (inputAge === 16) {
  console.log('you can buy a lottery.');
} else {
  console.log('you can go Trick-or-Treating.');
}
