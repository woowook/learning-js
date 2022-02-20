/* 피그 라틴(Pig Latin)은 단어의 첫 자음을 가져와서 단어 끝으로 이동하고 마지막에 'ay'를 추가한다.
만약 단어가 모음으로 시작 한다면 단어의 끝에 그냥 'way'를 붙인다.
예를 들어, 'pig'라는 단어는 'igpay', 'banana'는 'ananabay', 그리고 'aadvark'는 'aadvarkway'가 된다.
사용자에게 단어를 입력받아서 피그 라틴으로 변환하고 소문자로 출력하는 프로그램을 만들어라.
*/

import { question } from 'readline-sync';

const words = question('단어를 입력하세요 : ');
const firstWord = words.charAt(0);

if (
  firstWord === 'a' ||
  firstWord === 'e' ||
  firstWord === 'i' ||
  firstWord === 'o' ||
  firstWord === 'u'
) {
  console.log((words.slice(1) + firstWord + 'way').toLowerCase());
} else {
  console.log((words.slice(1) + firstWord + 'ay').toLowerCase());
}

switch (firstWord) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log((words.slice(1) + firstWord + 'way').toLowerCase());
    break;
  default:
    console.log((words.slice(1) + firstWord + 'ay').toLowerCase());
}
