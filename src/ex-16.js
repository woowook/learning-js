/* 사용자에게 지금 비가 오는지 묻고 그 대답을 소문자로 변환하여 대소문자 상관없도록 한다.
만약 "yes"라고 입력한다면 바람이 부는지 묻는다.
두 번째 질문에 대해 "yes"라고 입력하면 "It is too windy for an umbrella" 라는 메시지를 표시하라.
그렇지 않다면 "Take an umbrella"라는 메시지를 표시하라.
만약 첫 번째 질문에 대해 "yes"라고 입력하지 않는다면 "Enjoy your day"라는 메시지를 표시하라.
*/

import { question } from 'readline-sync';

const firstWeather = question('현재 비가 오나요? : ').toLowerCase();
// .toUpperCase() - 소문자 -> 대문자
// console.log(answerWeather);

if (firstWeather === 'yes') {
  const secondWeather = question('현재 바람이 부나요? : ').toLowerCase();
  if (secondWeather === 'yes') {
    console.log('It is too windy for an umbrella');
  } else {
    console.log('Take an umbrella');
  }
} else {
  console.log('Enjoy your Day');
}
