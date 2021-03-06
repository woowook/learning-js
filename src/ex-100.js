// 객체(배열도 사용 가능)를 사용하여 각 사람이 서로 다른 지역에서 달성한 매출을 보여주는 다음의 데이터를 생성하라.

const object = {
  John: { N: 3056, S: 8463, E: 8441, W: 2694 },
  Tom: { N: 4832, S: 6786, E: 4737, W: 3612 },
  Anne: { N: 5239, S: 4802, E: 5802, W: 1859 },
  Fiona: { N: 3904, S: 3645, E: 8821, W: 2451 },
};

for (const key of Object.keys(object)) {
  console.log(key, object[key]);
}
