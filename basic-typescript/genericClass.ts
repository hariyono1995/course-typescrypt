class Data<T> {
  private _data: T[];

  constructor(...elements: T[]) {
    this._data = elements;
  }

  addData(element: T): void {
    this._data.push(element);
  }

  addMultipleData(...elements: T[]): void {
    this._data.push(...elements);
  }

  getData(): T[] {
    return this._data;
  }
}

let data = new Data<string>("a", "b", "c");
data.addData("d");
data.addMultipleData("e", "f");
console.log(data.getData());

let newData = new Data<number>(1, 2, 3);
newData.addData(8);
newData.addMultipleData(9, 10);
console.log(newData.getData());
