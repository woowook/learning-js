/* 사용자에게 이름과 성을 소문자로 입력하라고 요청한다.
각 첫 문자만 대문자로 변경하고 이름과 성 사이에 공백을 하나 두어 결합한 후에 그 결과를 출력하라.
*/

// .charAt(index) - 특정 위치의 문자열 찾기
// .slice(start index, end index) - 특정 인덱스 시점부터의 문자열 추출
import { question } from 'readline-sync';

const firstName = question('이름을 소문자로 입력하세요 : ');
const lastName = question('성을 소문자로 입력하세요 : ');
const firstNameChar = firstName.charAt(0).toUpperCase();
const lastNameChar = lastName.charAt(0).toUpperCase();
console.log(
  firstNameChar + firstName.slice(1) + ' ' + lastNameChar + lastName.slice(1)
);
