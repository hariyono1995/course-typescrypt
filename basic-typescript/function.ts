export {};

//  function dengan tipe data yang di return

//  string
function getName(): string {
  return "Jhon";
  // return 888; //error harus string
}

console.log(getName());

//  number
function getNumber(): number {
  return 888;
}

console.log(getNumber());

//  function yang tidak mereturn apapun dan tidak boleh ada return di dalam function

function printName(): void {
  console.log(getName());
}

printName();

//  argument type di dalam function

function multiple(num1: number, num2: number): number {
  return num1 * num2;
}

// console.log(multiple(2, 3));

//  function as type / func sebagai type data
type Age = number;

let age: Age = 80;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => val1 + val2;

console.log(Add(2, 3));

//  default parameters/argument
const fullName = (first: string, last: string = "Doe"): string => {
  return first + " " + last;
};

console.log(fullName(getName(), "jaw"));

//  opsional parameter
//  opsional parameter

const getUmur = (val1: number, val2?: number): string => {
  return val1 + "" + val2;
};

console.log(getUmur(8, 8));
