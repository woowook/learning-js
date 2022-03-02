// 53번
// 다섯 개의 과일 이름들의 목록에서 임의의 과일을 출력하라.

const fruit = ['사과', '배', '딸기', '바나나', '복숭아'];
// Fruit[0~5사이 랜덤 값]
// Math.random() * 5 -> 0 ~ 4까지
console.log(fruit[Math.floor(Math.random() * 5)]);
