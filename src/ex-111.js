// 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라.
//
//       Title                                    Author                         Publication Date
// 0  To Kill A Mockingbird                       Harper Lee                     1960
// 1  A Brief History of Time                     Stephen Hawking                1988
// 2  The Great Gatsby                            F. Scott Fitzgerald            1922
// 3  The Man Who Mistook His Wife for a Hat      Oliver Sacks                   1985
// 4  Pride and Prejudice                         Jane Austen                    1813

import fs from 'node:fs';

let books = 'Title, Author, Publication Date\n';
books += 'To Kill A Mockingbird, Harper Lee, 1960\n';
books += 'A Brief History of Time, Stephen Hawking, 1988\n';
books += 'The Great Gatsby, F. Scott Fitzgerald, 1922\n';
books += 'The Man Who Mistook His Wife for a Hat, Oliver Sacks, 1985\n';
books += 'Pride and Prejudice, Jane Austen, 1813';

// Const books1 = [
//   // ['Title', 'Author', 'Publication Date'],
//   ['To Kill A Mockingbird', 'Harper Lee', '1960'],
//   ['A Brief History of Time', 'Stephen Hawking', '1988'],
//   ['The Great Gatsby', 'F. Scott Fitzgerald', '1922'],
//   ['The Man Who Mistook His Wife for a Hat', 'Oliver Sacks', '1985'],
//   ['Pride and Prejudice', 'Jane Austen', '1813'],
// ];

// const data = books1.toString().split('\n');

fs.writeFile('./src/books.csv', books, 'utf-8', function (error) {
  if (error) {
    console.log('error');
  } else {
    console.log('파일 생성 완료');
  }
});
