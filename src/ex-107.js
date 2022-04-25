// ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라.

import fs from 'node:fs';

fs.readFile('./src/Names.txt', 'utf-8', function (error, data) {
  if (error) {
    console.log('error');
  } else {
    console.log(data);
  }
});
