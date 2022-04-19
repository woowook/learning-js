// 사용자에게 이름을 입력하라고 요청하고 입력된 이름의 길이를 출력한다.
// 그런 다음, 성을 입력 하라고 요청하고 성의 길이를 출력한다
// 성과 이름 사이에 공백 하나를 두어 결합하고 그 결과를 출력한다.
// '마지막으로, 공백을 포함한 전체 이름의 길이를 출력하라.

import { question } from 'readline-sync';

// 문자열의 길이 출력 - length
const fname = question('이름을 입력하세요 : ');
console.log(`${fname} 의 길이는 ${fname.length} 입니다.`);
const lname = question('성을 입력하세요 : ');
console.log(`${lname} 의 길이는 ${lname.length} 입니다.`);

// 문자열 합치기 - join, concat
// arr.join(separator)
const name = [fname, lname].join(' ');
console.log(`사용자의 이름은 ${name} 이고 길이는 ${name.length} 입니다.`);

// Str.concat(str1, str2, ....)
const name1 = fname.concat(' ', lname);
console.log(`사용자의 이름은 ${name1} 이고 길이는 ${name1.length} 입니다.`);

// 다시 확인
