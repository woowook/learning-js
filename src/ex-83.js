// 사용자에게 대문자로 메시지를 입력하라고 요청한다.
// 만약 메시지 에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다.

import { question } from 'readline-sync';

// Let check = true;
// while (check) {
//   const message = question('대문자로 메시지를 입력하세요 : ');

//   // 입력받은 메시지의 공백 제거
//   const replaceMessage = message.replace(/(\s*)/g, '');
//   // Console.log(replaceMessage);

//   // 소문자 찾기
//   for (const i of replaceMessage) {
//     if (i === i.toLowerCase()) {
//       console.log('메시지에 소문자로 입력하셨습니다.');
//       break;
//     } else {
//       check = false;
//       console.log(message);
//     }
//   }
// }

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const message = question('대문자로 메시지를 입력하세요 : ');
  const replaceMessage = message.replace(/(\s*)/g, '');

  if (replaceMessage === replaceMessage.toUpperCase()) {
    console.log(message);
    break;
  } else {
    console.log('메시지에 소문자로 입력하셨습니다.');
  }
}
