/* 사용자에게 좋아하는 색을 입력하라고 요청한다.
만약 "red" "RED" 또는 "Red" 를 입력하면 "I like red too"라는 메시지를 출력하라.
그렇지 않다면 "I don't like that colour, I prefer red"라는 메시지를 출력하라.
*/

import { question } from 'readline-sync';

const inputColor = question('좋아하는 색을 입력하세요(ex:red) : ');

// If (inputColor === 'red') {
//     console.log('I like red too');
// } else if(inputColor === 'RED') {
//     console.log('I like red too');
// } else if(inputColor === 'Red') {
//     console.log('I like red too');
// } else {
//     console.log("I don't like that color, I prefer red");
// }

if (inputColor === 'red' || inputColor === 'RED' || inputColor === 'Red') {
  console.log('I like red too');
} else {
  console.log("I don't like that color, I prefer red");
}
