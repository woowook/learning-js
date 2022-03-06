// 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 그것들은 인덱스 번호 1부터 시작하는 객체에 저장한다.
// 인덱스 번호와 항목이 모두 표시되도록 객체를 출력한다.
// 사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
// ~~남아 있는 데이터를 정렬하고~~  객체를 다시 출력하라.

import { question } from 'readline-sync';

// ?? 인덱스는 0부터.. 1부터 입력을 하려면? 0번째에 빈값을 넣어서 해봄
// 아니면 인덱스 0부터 넣되 보여지는건 +1로 해서 해야하나?
const foods = [''];
for (let i = 1; i < 5; i++) {
  const favoriteFood = question(`${i}번째 좋아하는 음식을 입력하세요 : `);
  foods.push(favoriteFood);
  // Foods.splice(i, 1, favoriteFood);
}

// Foods.forEach(function (food, index) {
//   console.log(index, food);
// });

for (let j = 1; j < 5; j++) {
  console.log(j + '. ' + foods[j]);
}

const deleteFood = question('제거하고 싶은 항목을 입력하세요(숫자) : ');

switch (deleteFood) {
  case '1':
  case '2':
  case '3':
  case '4':
    foods.splice(deleteFood, 1);
    break;
  default:
    console.log('잘못 입력 하셨습니다.');
    break;
}

for (let j = 1; j < foods.length; j++) {
  console.log(j + '. ' + foods[j]);
}
