import { question } from 'readline-sync';

const largeNumber = Number(question('첫번째 숫자를 입력하세요(100 이상) : '));
const smallNumber = Number(question('두번째 숫자를 입력하세요(10 미만) : '));
const avgNumber = Math.trunc(largeNumber / smallNumber);
// Const ave = largeNumber / smallNumber;
// 소수점이 나오는것을 정수로 바꾸기 위해서 Math.trunc로 소수점 아래를 버리기
// parseInt로 정수형 표기도 있지만 잘쓰지못했음(결과가 나오긴 했는데 왜 Number.parseInt인지와 radix?를 왜 해줘야되는지를 모르겠음)
console.log(
  `${smallNumber}이(가) ${largeNumber}안에 ${avgNumber}번 들어갑니다.`
);
// Console.log(
//   `${smallNumber}이(가) ${largeNumber}안에 ${Number.parseInt(
//     ave,
//     10
//   )}번 들어갑니다.`
// );
