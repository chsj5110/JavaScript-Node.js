function greetUser(greetingPrefix, userName = "user") {     // 비선택적 매개변수가 먼저, 선택적 매개변수는 뒤에
//   console.log(greetingPrefix + " " + userName + "!");
// console.log(`Hi

// there!`);                                                // `` 역따옴표는 줄바꿈도 된다
console.log(`${greetingPrefix} ${userName}!`);              // `${}` 를 이용하면 + 로 연결하지 않아도 한 줄로 쓸 수 있다
}

greetUser("Hi", "Soojin");
greetUser("Hello");

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 3, 5, 7, 9];

console.log(sumUp(1, 2, 3, 4, 5));
console.log(sumUp(inputNumbers));
console.log(sumUp(...inputNumbers));        // [...] 분산 연산자 Spread Operator

console.log(sumUp);