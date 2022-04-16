//  bisa  property pada interface yang bersifat readonly tidak dapat di ubah jika sudah di tentukan;

interface Student {
  readonly _nama: string;
  readonly _umur: number;
}

let jhon: Student = { _nama: "jhon", _umur: 12 };

// jhon._nama = "max"; // error cannot assign _nama because property in interface readonly
