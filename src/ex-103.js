// 102번 프로그램을 수정하여 모든 사람의 이름과 나이를 출력하라. 단, 신발 사이즈는 출력하지 않는다.

import { question } from 'readline-sync';

const object = {};
for (let i = 0; i < 4; i++) {
  const name = question('이름을 입력하세요 : ');
  const age = question('나이를 입력하세요 : ');
  const size = question('신발사이즈를 입력하세요 : ');
  object[name] = { Age: age, Size: size };
}

for (const key of Object.keys(object)) {
  console.log(`이름 : ${key}, 나이 : ${object[key].Age}`);
}
