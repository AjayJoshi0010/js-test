const name = "Ajay"
let password = 1212

var email = "ajay@yahoo.com"      //Consider not using var because of its issue in block scope and fuctional scope
age = 19 // not suggested 

let city;

// name = "notAjay"  -->not allowed as name is a constant because of keyword const
// console.log(name);

password=121212
email="asr@asasdf.com"
age =20


//First printing method
console.log(name);
console.log(password);
console.log(email);
console.log(age);

//Another printing method
console.table([name , password , email , age, city])



