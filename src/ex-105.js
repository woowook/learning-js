// ‘Numbers.txt’라는 이름의 새로운 파일을 생성한다. 한 줄에 쉼표로 구분된 다섯 개의 숫자를 추가한다.
// 프로그램을 실행하고 나서 이 프로그램이 저장된 위치에 해당 파일이 생성되었는지 확인한다.
// 여러분이 윈도우 시스템을 사용하고 있다면 이 파일을 메모장에 불러와서 확인하는 게 가장 쉽게 확인하는 방법일 것이다.
// https://right-hot.tistory.com/entry/Javascript-fs%ED%8C%8C%EC%9D%BC-%EC%8B%9C%EC%8A%A4%ED%85%9C-%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4-%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter9.html

import fs from 'node:fs';

const data = '1;2;3;4;5';

// Export function writeFile(file: PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options: WriteFileOptions, callback: NoParamCallback): void;
fs.writeFile('./src/Numbers.txt', data, 'utf8', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('파일 쓰기 완료');
  }
});

// Export function writeFileSync(file: PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: WriteFileOptions): void;
fs.writeFileSync('./src/Numbers1.txt', data, 'utf8');
console.log('파일쓰기 완료');

// 파일 생성 여부 확인
// existsSync or stat ???
const cehck = fs.existsSync('./src/Numbers.txt');
console.log(cehck);
const cehck1 = fs.existsSync('./src/Numbers1.txt');
console.log(cehck1);

fs.stat('./src/Numbers.txt', function (error) {
  if (error === null) {
    console.log('File exists.');
  } else {
    console.log('File not exists.');
  }
});

fs.stat('./src/Numbers1.txt', function (error) {
  if (error === null) {
    console.log('File exists.');
  } else {
    console.log('File not exists.');
  }
});
