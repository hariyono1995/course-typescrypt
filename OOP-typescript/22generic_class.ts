interface Generic2<T> {
  _propA: T;
  methodA(): T;
}

class GenericClass<T> implements Generic2<T> {
  _propA: T;

  constructor(prop: T) {
    this._propA = prop;
  }

  methodA(): T {
    return this._propA;
  }
}

const generic = new GenericClass<string>("Hello Dunia");
console.log(generic.methodA());

//  memasukkan class menjadi generic type data

class ClassA {
  public _total: number;
  constructor(total: number) {
    this._total = total;
  }
}

class ClassBaru<T> {
  public _totalStudent: T;

  constructor(totalStudent: T) {
    this._totalStudent = totalStudent;
  }
}

const classA = new ClassA(40);

const classBaru = new ClassBaru(classA);

console.log(classBaru);
