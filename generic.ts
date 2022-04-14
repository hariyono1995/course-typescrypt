export {};
console.log("generic");

function getData(value: any) {
  return value;
}

console.log(getData("Jhon").length); // 4
console.log(getData(123).length); // undefined (untuk mengatasi ini bisa menggunakan generic)

function myData<T>(value: T) {
  return value;
}

console.log(myData("Jhon").length); //4
// console.log(myData(123).length); // error karena number tidak bisa  di gunakan untuk type number

//  penulisan untuk arrow function
const Data = <T>(value: T) => {
  return value;
};
