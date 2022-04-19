// 정수들을 저장할 배열을 생성한다.
// 임의의 수 다섯 개를 생성하고 배열에 저장한다.
// 배열의 항목을 한 줄에 하나씩 출력하라.

const number1 = [];
for (let i = 1; i < 6; i++) {
  const rand = Math.floor(Math.random() * 100);
  console.log(`생성한 난수 : ${rand}`);
  number1.push(rand);
}

// Console.log(number1);

for (const number of number1) {
  console.log(number);
}
