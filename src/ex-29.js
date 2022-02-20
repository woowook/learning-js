// 29. 사용자에게 500이하 정수를 입력하라고 요청한다.
// 입력받은 숫자의 제곱근을 구하고 소수점 둘째자리까지 출력하라.

import { question } from 'readline-sync';

const number = Number(question('500 이하 정수를 입력하세요 : '));

// 입력 받은 숫자가 정수인지 확인
// Number.isInteger()는 IE 호환에 맞지 않아서 사용하지 않음
// if (Number.isInteger(number) === true) {
// }
if (number % 1 === 0) {
  // Math.sqrt() 숫자의 제곱근 구하기
  console.log(
    `숫자 ${number}의 제곱근은 ${Math.sqrt(number).toFixed(2)}입니다.`
  );
} else {
  console.log(`입력하신 숫자가 정수가 아닙니다.`);
}
