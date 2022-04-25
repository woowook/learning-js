// Function printHello() {
//   console.log('Hello');
// }

// printHello();

// function log(message) {
//   console.log(message);
// }

// log('hello@@');

// const ellie = { name: 'ellie' };
// console.log(ellie);

// function changeName(object) {
//   object.name = 'coder';
// }

// changeName(ellie);
// console.log(ellie);

// Function name(param) { body... return}
// Namimg -> doSomething, command, verb
// function is object

function printHelllo() {
  console.log('hello');
}

printHelllo();

function log(message) {
  console.log(message);
}

log('hello@@@');

// // Parameters
// function showMessage(message, from = 'wwwwwww') {
//   // 함수 호출시에 파라미터가 없는 경우 디폴트값 지정
//   console.log(`${message} by ${from}`);
// }

// showMessage('Hi');

// // Rest Parameter
// // 배열형태로 파라미터 전달..
// function printAll(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }

//   // Args에 있는 값을 하나씩 arg에 지정되면서
//   for (const arg of args) {
//     console.log(arg);
//   }
// }

// printAll('a', 'b', 'c', 'd');

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(1, 2);
// console.log(result);

// // 함수 조건이 맞지 않을때는 빨리 리턴, 필요한 로직들은 그 뒤에 작성

// // 변수를 선언함과 동시에 함수
// const print = function () {
//   console.log('print');
// };

// print();

// function randomQuiz(answer, printYes, printNo) {
//   if (answer === 'love you') {
//     printYes();
//   } else {
//     printNo();
//   }
// }

// // Const printYes = function () {
// //   console.log('yes');
// // };

// function printYes() {
//   console.log('yes');
// }

// const printNo = function () {
//   console.log('no');
// };

// randomQuiz('dddd', printYes, printNo);
// randomQuiz('love you', printYes, printNo);

// // Arrow Function
// // anonymous function
// // const simplePrint = function () {
// //   console.log('simplePrint');
// // };

// const simplePrint = () => console.log('simplePrint');
// simplePrint();
// const add = (a, b) => a + b;
// add();
// // Const add = function (a, b) {
// //   return a + b;
// // };

// // Arrow function에서도 {} 사용 가능 / 대신에 return이 필요
