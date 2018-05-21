function myunstrict() {
  bar = 5;
  console.log(bar);
}

myunstrict(); // will not throw an error. will create a variable in the global scope, and assign it a value of 5.