//  readonly fungsinya sama dengan const tidak dapat di ubah akan tetapi readonly hanya di gunakan di dalam class,

class Person {
  readonly gender: string = "Female";
}

const person = new Person();
// person.gender = 'Male'; //error  because gender is read only property
