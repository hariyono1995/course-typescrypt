export {};

// type data

//  string
let name: string = "Max";

//  number
let umur: number = 27;

//  boolean
let isMarried: boolean = false;

//  any -> memungkinkan bisa mengisi variabel dengan berbagai tipe data
let password: any = "ikehieek";
password = 27;
password = true;
password = ["hello"];
password = { password: "password" };

//  array
let hobbies: string[] = ["read book", "write code"];
// hobbies =[8] // error

let randomNum: number[] = [1, 2, 3, 4, 5, 6, 7];
// randomNum['string'] //error

let address: any[] = ["jln. abc no.", 8, true];

// tuples -> array yang mana tipe datanya sudah ditentukan di dalamnya dan jumlah itemnya pun terbatas

let biodata: [string, number] = ["John", 27];
// biodata= ["John", 27, "John"];  // error melebihi batas jumlah item yang telah di tentukan
