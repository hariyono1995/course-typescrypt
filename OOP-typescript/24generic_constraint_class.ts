interface Product {
  sell(): void;
}

class ProductA implements Product {
  sell(): void {
    console.log("jual product A");
  }
}

class ProductB implements Product {
  sell(): void {
    console.log("jual product B");
  }
}

function sellProducts<T extends Product>(products: T[]): void {
  products.forEach((product) => product.sell());
}

const productA = new ProductA();
const productB = new ProductB();

sellProducts([productA, productB]);
