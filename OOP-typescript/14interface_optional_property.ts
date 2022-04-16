//  bisa mengabaikan property pada interface yang bersifat optional

interface Guru {
  _name: string;
  _age: number;
  _phone?: string | number; // optional property boleh ada boleh tidak
}

const Jhon: Guru = { _name: "Jhon", _age: 29 };
const Max: Guru = { _name: "Max", _age: 29, _phone: "0857238965" };

console.log(Jhon);
console.log(Max);
