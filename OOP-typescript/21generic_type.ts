type Generics3<T> = T;

function genericFunction3<T>(value: T): Generics3<T> {
  return value;
}

console.log(genericFunction3<string>("Hello World!"));
