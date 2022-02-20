/* 사용자에게 자장가의 첫 줄을 입력하라고 요청하고 그 문자열의 길이를 출력한다.
사용자에게 범위를 시작할 인덱스 번호를 묻고 범위의 끝 인덱스 번호를 묻는다.
그런 후에 그 범위의 텍스트를 출력하라.
자바스크립트에서 인덱스는 1이 아닌 0부터 시작한다는 것을 기억하자.
*/

import { question } from 'readline-sync';

const lyrics = question('자장가의 첫 줄을 입력하세요 : ');
console.log(`자장가의 길이를 ${lyrics.length} 입니다`);
const startLyrics = question('시작하실 위치를 입력하세요(숫자) : ');
const endLyrics = question('끝내실 위치를 입력하세요(숫자) : ');
console.log(lyrics.slice(startLyrics, endLyrics));
