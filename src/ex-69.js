// 다섯 개의 국가 이름을 담고 있는 배열을 만들고 배열 전체를 출력하라.
// 표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
// 입력된 국가 이름의 인덱스 번호(즉, 목록에서의 위치)를 출력하라.

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

const inputCountry = question('표시된 국가 이름들 중 하나를 입력하세요 : ');
// Console.log(country.indexOf(inputCountry));
if (country.includes(inputCountry)) {
  console.log(
    `${inputCountry}는 목록 중 ${country.indexOf(
      inputCountry
    )}에 위치하고 있습니다.`
  );
} else {
  console.log('입력하신 국가가 목록에 없습니다.');
}
