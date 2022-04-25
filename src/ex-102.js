// 네 명의 이름과 나이, 신발 사이즈를 입력하라고 요청한다.
// 입력된 이름들 중 하나를 입력하라고 요청하고 입력된 이름의 나이와 신발 사이즈를 출력하라.

import { question } from 'readline-sync';

const object = {};
for (let i = 0; i < 4; i++) {
  const name = question('이름을 입력하세요 : ');
  const age = question('나이를 입력하세요 : ');
  const size = question('신발사이즈를 입력하세요 : ');
  object[name] = { Age: age, Size: size };
}

for (const key of Object.keys(object)) {
  // Console.log(key, object[key]);
  console.log(
    `이름 : ${key}, 나이 : ${object[key].Age}, 신발사이즈 : ${object[key].Size}`
  );
}

// Console.log(object);

const userName = question('입력된 이름 중 하나를 입력하세요 : ');
if (userName in object) {
  console.log(
    `${userName}의 나이는 ${object[userName].Age}이고 신발사이즈는 ${object[userName].Size}입니다.`
  );
} else {
  console.log('이름을 다시 확인해주세요');
}
