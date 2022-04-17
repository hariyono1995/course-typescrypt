//  memungkinkan class atau interface mempunyai tipe data yang lebih dinamis

function password<T>(value: T): void {
  console.log(value);
}

password<any>("hali" + 888);
