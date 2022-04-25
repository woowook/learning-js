// ‘Names.txt’라는 이름의 새로운 파일을 생성한다. 다섯 명의 이름을 한 줄에 하나씩 문서에 추가한다.
// 프로그램을 실행한 후에 이 프로그램이 저장된 위치에 해당 파일이 제대로 생성되었는지 확인하라.

import fs from 'node:fs';

const data = 'kim\nLee\nWoo\nPark\nHan\n';

fs.writeFile('./src/Names1.txt', data, 'utf-8', function (error) {
  if (error) {
    console.log('error');
  } else {
    console.log('파일 생성 완료');
  }
});

fs.writeFileSync('./src/Names.txt', data, 'utf-8');
// Const check1 = fs.existsSync('./src/Names.txt');
// console.log(check1);
// const check2 = fs.existsSync('./src/Names1.txt');
// console.log(check2);

fs.readFile('./src/Names1.txt', 'utf-8', function (error) {
  if (error) {
    console.log('error');
  } else {
    console.log('잘된걸로..');
  }
});
