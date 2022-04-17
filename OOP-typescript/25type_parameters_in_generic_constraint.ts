function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3 };

console.log(getProperty(x, "a"));
