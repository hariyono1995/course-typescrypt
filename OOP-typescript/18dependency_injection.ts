class Store {
  private _name: string = "Fashion Store";
  private _profit: number = 2000;

  getProfit(): number {
    return this._profit;
  }

  getName(): string {
    return this._name;
  }
}

class FashionMuslim {
  private _store: Store;
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
    this._store = new Store();
  }

  sell(): void {
    console.log(
      `harga jual baju muslim di toko ${this._store.getName()} adalah ${
        this._price + this._store.getProfit()
      }`
    );
  }
}

let bajuMuslim = new FashionMuslim("koko", 70000);

bajuMuslim.sell();

//  --------------- penerapan dependency injection ---------------

interface IStore {
  _name: string;
  _profit: number;
  getProfit(): number;
}

class TokoLama implements IStore {
  _name: string = "Toko Lama";
  _profit: number = 2000;

  getProfit(): number {
    return this._profit;
  }

  getName(): string {
    return this._name;
  }
}

class TokoBaru implements IStore {
  _name: string = "Toko Baru";
  _profit: number = 2500;

  getProfit(): number {
    return this._profit;
  }

  getName(): string {
    return this._name;
  }
}

class HijabStore {
  private _name: string;
  private _price: number;
  private _store: IStore;

  constructor(store: IStore, name: string, price: number) {
    this._store = store;
    this._name = name;
    this._price = price;
  }

  sell(): void {
    console.log(
      `${this._name} di sediakan oleh ${this._store._name} dengan harga ${
        this._price + this._store.getProfit()
      }`
    );
  }
}

class ClotheStore {
  private _name: string;
  private _price: number;
  private _store: IStore;

  constructor(store: IStore, name: string, price: number) {
    this._store = store;
    this._name = name;
    this._price = price;
  }

  sell(): void {
    console.log(
      `${this._name} di sediakan oleh ${this._store._name} dengan harga ${
        this._price + this._store.getProfit()
      }`
    );
  }
}

let tokoBaru = new TokoBaru();
let tokoLama = new TokoLama();

let hijabMahal = new HijabStore(tokoBaru, "Saudia", 50000);

let clotheStore = new ClotheStore(tokoLama, "RSCHd", 80000);

console.log(hijabMahal);
hijabMahal.sell();

console.log(clotheStore);
clotheStore.sell();
