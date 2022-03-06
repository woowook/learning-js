// 두 개의 스포츠 이름을 담고 있는 배열을 생성하라.
// 사용자에게 좋아하는 스포츠가 무엇인지 물어보고 그것을 배열 끝에 추가하라.
// 배열을 정렬하고 출력하라.

import { question } from 'readline-sync';

const sports = ['baseball', 'football'];
console.log(sports.join(', '));
const input = question('좋아하는 스포츠를 입력하세요 : ');
// 배열의 마지막에 값 추가
sports.push(input);
console.log(sports.join(', '));
// 정렬(오름차순)
sports.sort();
console.log(sports.join(', '));
