// function generic24<T> (arg : T) : T {
//   // console.log(arg.length);
//   return arg;
// }

//  ----------------------------------------------------------------
interface Length {
  length: number;
}

function generic24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const temp = generic24("Hello world!");
//  jadi hanya satu tipe data saja yaitu string;

//  supaya bisa menginput number;
const temp1 = generic24({ length: 20, value: 8987210 });

console.log(temp1);

console.log(temp);
