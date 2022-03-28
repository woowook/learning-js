// 시 한 구절을 사용자에게 표시하고 시작 인덱스와 마지막 인덱스를 입력하도록 요청한다. 입력한 두 값 사이의 문자를 출력하라.

import { question } from 'readline-sync';

const poem =
  'Then took the other, as just as fair And having perhaps the better claim';
console.log(poem);

const startPosition = Number(question('시작 위치를 입력하세요 : '));
const endPosition = Number(question('끝 위치를 입력하세요 : '));

// 문자열 자르기
// str.slice(start, end)
console.log(poem.slice(startPosition - 1, endPosition + 1 - startPosition));
