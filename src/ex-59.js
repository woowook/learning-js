// 59번
// 다섯 개의 색상을 표시하고 그들 중 하나를 사용자에게 선택하라고 요청한다.
// 만약 프로그램이 선택한 것과 동일하면 "Well done"이라고 출력하고,
// 그렇지 않다면 컴퓨터가 선택한 색상이 포함된 위트 있는 문장을 출력하라.
// 예: "I bet you are GREEN with envy" 또는 "You are probably feeling BLUE right now".
// 다시 맞혀 보라고 사용자에게 색상을 입력하라고 한다. 사용자가 맞힐 때까지 이 작업을 반복한다.

import { question } from 'readline-sync';

const color = ['red', 'blue', 'green', 'white', 'black'];
console.log(color);
const rColor = color[Math.floor(Math.random() * 5)];
console.log(rColor);

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  // 입력의 대소문자 구분 없이
  const choice = question('목록에서 원하는 색상을 입력하세요 : ').toLowerCase();
  // If (choice === rColor) {
  //   console.log('Well done');
  //   break;
  // } else if (choice === 'red') {
  //   console.log(`Well, there's fair amount of RED tape.`);
  // } else if (choice === 'blue') {
  //   console.log('You are probably feeling BLUE right now');
  // } else if (choice === 'green') {
  //   console.log('I bet you are GREEN with envy');
  // } else if (choice === 'white') {
  //   console.log('The new office block has become an expensive WHITE elephant.');
  // } else if (choice === 'black') {
  //   console.log(`I've always been the BLACK sheep.`);
  // } else {
  //   console.log('목록에 있는 색상을 입력해주세요.');
  // }

  if (choice === rColor) {
    console.log('Well done');
    break;
  }

  switch (choice) {
    case 'red':
      console.log(`Well, there's fair amount of RED tape.`);
      break;
    case 'blue':
      console.log('You are probably feeling BLUE right now');
      break;
    case 'green':
      console.log('I bet you are GREEN with envy');
      break;
    case 'white':
      console.log(
        'The new office block has become an expensive WHITE elephant.'
      );
      break;
    case 'black':
      console.log(`I've always been the BLACK sheep.`);
      break;
    default:
      console.log('목록에 있는 색상을 입력해주세요.');
  }
}
