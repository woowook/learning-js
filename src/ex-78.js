// 네 개의 TV 프로그램 타이틀을 담은 배열을 생성하고 각 항목을 한 줄씩 출력한다.
// 사용자에게 다른 프로그램을 입력하도록 요청하고 배열에서의 원하는 위치를 묻는다.
// 입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개 의 TV 프로그램 모두를 다시 출력한다.

import { question } from 'readline-sync';

const program = ['a', 'b', 'c', 'd'];

for (const element of program) {
  console.log(element);
}

const addProgram = question('프로그램 타이틀을 입력하세요 : ');
const index = question('원하시는 위치를 입력하세요 : ');

// 원하는 인덱스 위치에 추가 .splice(위치, 삭제할 개수, 추가할 내용)
program.splice(index, 0, addProgram);

for (const element of program) {
  console.log(element);
}
