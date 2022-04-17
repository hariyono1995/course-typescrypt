interface Generics<T> {
  value: T;
}

function genericFunction<T>(value: T): Generics<T> {
  let result: Generics<T> = {
    value: value,
  };

  return result;
}

console.log(genericFunction<boolean>(true));
console.log(genericFunction<string[]>(["Jhon", "Doe"]));
console.log(genericFunction<number>(123321));
console.log(
  genericFunction<{ nama: string; umur: number }>({ nama: "Jhon", umur: 10 })
);
