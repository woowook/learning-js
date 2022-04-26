// 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라.
//
//       Title                                    Author                         Publication Date
// 0  To Kill A Mockingbird                       Harper Lee                     1960
// 1  A Brief History of Time                     Stephen Hawking                1988
// 2  The Great Gatsby                            F. Scott Fitzgerald            1922
// 3  The Man Who Mistook His Wife for a Hat      Oliver Sacks                   1985
// 4  Pride and Prejudice                         Jane Austen                    1813

// Import fs from 'node:fs';

// JSON 배열 객체
const books = [
  {
    Title: 'To Kill A Mockingbird',
    Author: 'Harper Lee',
    'Publication Date': '1960',
  },
  {
    Title: 'A Brief History of Time',
    Author: 'Stephen Hawking',
    'Publication Date': '1988',
  },
  {
    Title: 'The Great Gatsby',
    Author: 'F. Scott Fitzgerald',
    'Publication Date': '1922',
  },
  {
    Title: 'The Man Who Mistook His Wife for a Hat',
    Author: 'Oliver Sacks',
    'Publication Date': '1985',
  },
  {
    Title: 'Pride and Prejudice',
    Author: 'Jane Austen ',
    'Publication Date': '1813',
  },
];

console.log(books);
