// 사용자에게 숫자를 입력하라고 요청하고, 입력한 위치의 국가 이름이 출력되는 기능을 069번 프로그램에 추가하라.

import { question } from 'readline-sync';

const country = ['korea', 'china', 'japan', 'united states', 'russia'];
console.log(country);
// 배열의 각 값에 구분자 추가해서 모든 값들을 연결한 문자열 리턴
console.log(country.join(', '));

/*
For (const element of country) {
  console.log(element);
}
*/

const inputCountry = question('숫자를 입력하세요 : ');
// Console.log(country.indexOf(inputCountry));
// if (country.includes(inputCountry)) {
//   console.log(
//     `${inputCountry}는 목록 중 ${country.indexOf(
//       inputCountry
//     )}에 위치하고 있습니다.`
//   );
// } else {
//   console.log('입력하신 국가가 목록에 없습니다.');
// }

console.log(country[inputCountry]);

if (inputCountry > country.length || inputCountry < 0) {
  console.log('입력하신 숫자를 다시 확인하세요');
} else {
  console.log(
    `입력하신 숫자 ${inputCountry}의 국가는 ${country[inputCountry]} 입니다`
  );
}
