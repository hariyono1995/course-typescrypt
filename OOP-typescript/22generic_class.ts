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
