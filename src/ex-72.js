// 교과목 여섯 개가 담긴 배열을 생성하라.
// 이들 중 사용자가 좋아하지 않는 과목을 묻고 그 과목을 배열에서 삭제한 후에 배열을 다시 출력하라.

import { question } from 'readline-sync';

const subject = [
  'English',
  'Math',
  'Science',
  'Music',
  'Korean language',
  'Physical Education',
];
console.log(subject.join(', '));

const hateSubject = question('싫어하는 과목을 입력하세요 : ');
// 입력한 내용이 배열의 몇번째 인덱스인지
// console.log(subject.indexOf(hateSubject));
// 입력한 내용이 배열에 포함되어 있는지 확인 (true, false)
// console.log(subject.includes(hateSubject));

// 소문자로 변경
const changeChar = hateSubject.toLowerCase();
console.log(changeChar);
const changeSub = [];
for (const element of subject) {
  changeSub.push(element.toLowerCase());
}

// If (subject.includes(hateSubject) === true) {
//   subject.splice(subject.indexOf(hateSubject), 1);
//   console.log(subject.join(', '));
// } else {
//   console.log('과목을 다시 확인하고 입력해주세요');
// }

if (changeSub.includes(changeChar) === true) {
  subject.splice(changeSub.indexOf(changeChar), 1);
  console.log(subject.join(', '));
} else if (subject.includes(hateSubject) === true) {
  subject.splice(subject.indexOf(hateSubject), 1);
  console.log(subject.join(', '));
} else {
  console.log('과목을 다시 확인하고 입력해주세요');
}
