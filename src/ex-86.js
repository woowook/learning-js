// 사용자에게 새로운 비밀번호를 입력하라고 요청하고, 한 번 더 입력하라고 요청한다.
// 입력한 두 개의 비밀번호가 일치하면 "Thank you'"라고 출력한다.
// 만약 입력한 문자는 서로 일치하는데 대소문자가 틀리다면 "They must be in the same case"라고 출력한다.
// 문자가 일치하지 않는다면 "Incorrect" 메시지를 출력하라.

import { question } from 'readline-sync';

const password1 = question('비밀번호를 입력하세요 : ');
const password2 = question('비밀번호를 한번 더 입력하세요 : ');

// 비밀번호1과 재입력한거 하나씩 비교해서 일치하면 thank you
// 대소문자가 틀리면 they must 어쩌고
// 입력한 문자가 일치하지 않으면 incorrect

if (password1 === password2) {
  console.log('Thank you');
} else if (password1.length === password2.length) {
  for (let i = 0; i < password1.length; i++) {
    if (password1.charAt(i) === password2.charAt(i)) {
      continue;
    } else {
      console.log('they must be in the same case');
    }
  }
} else {
  console.log('Incorrect');
}
