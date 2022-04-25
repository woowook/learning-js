// 간단한 2차원 배열로 다음의 데이터를 생성하라.

// 2차원 배열... 표 그려서 배열의 각 내용을 집어넣으면 되지 않을까?

const array_ = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

console.table(array_);

for (const element of array_) {
  console.log(element);
}
