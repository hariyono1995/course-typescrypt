"use strict";
exports.__esModule = true;
// type data
//  string
var name = "Max";
//  number
var umur = 27;
//  boolean
var isMarried = false;
//  any -> memungkinkan bisa mengisi variabel dengan berbagai tipe data
var password = "ikehieek";
password = 27;
password = true;
password = ["hello"];
password = { password: "password" };
//  array
var hobbies = ["read book", "write code"];
// hobbies =[8] // error
var randomNum = [1, 2, 3, 4, 5, 6, 7];
// randomNum['string'] //error
var address = ["jln. abc no.", 8, true];
// tuples -> array yang mana tipe datanya sudah ditentukan di dalamnya dan jumlah itemnya pun terbatas
var biodata = ["John", 27];
// biodata= ["John", 27, "John"];  // error melebihi batas jumlah item yang telah di tentukan
