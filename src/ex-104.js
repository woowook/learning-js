// 네 명의 이름과 나이 그리고 신발 사이즈를 입력받은 후, 목록에서 제거하고 싶은 사람의 이름을 입력하라고 한다.
// 입력된 이름의 데이터를 삭제하고 나머지 데이터를 한 줄에 하나씩 출력하라.

import { question } from 'readline-sync';

const object = {};
for (let i = 0; i < 4; i++) {
  const name = question('이름을 입력하세요 : ');
  const age = question('나이를 입력하세요 : ');
  const size = question('신발사이즈를 입력하세요 : ');
  object[name] = { Age: age, Size: size };
}

// 객체 제거 - delete
// delete object.property
// delete object['property']
const deleteName = question('제거하고 싶은 이름을 입력하세요 : ');
delete object[deleteName];

for (const key of Object.keys(object)) {
  // Console.log(key, object[key]);
  console.log(
    `이름 : ${key}, 나이 : ${object[key].Age}, 신발사이즈 : ${object[key].Size}`
  );
}
