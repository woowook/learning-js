// Books.csv 파일을 사용하여 각 행 번호와 그에 대한 데이터를 출력하라.

import fs from 'node:fs';

const data = fs.readFileSync('./src/books.csv').toString().split('\n');

for (const [keys, value] of Object.entries(data)) {
  console.log(`${keys}, ${value}`);
}
