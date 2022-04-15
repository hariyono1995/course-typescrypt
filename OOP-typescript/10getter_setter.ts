class Product {
  private _price: number = 808;

  get price() {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

const product = new Product();
product.price = 500;
console.log(product.price);
