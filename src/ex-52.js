// 52번
// 1부터 100(포함) 사이의 임의의 정수를 출력하라..

// Math.random() -> 0 ~ 9.99999 까지의 숫자
// Math.floor() -> 같거나 작은 수 중 가장 큰 정수 반환

// random으로 반환된 숫자를 정수로 변환
const ran1 = Math.floor(Math.random() * 100) + 1;
console.log(ran1);
