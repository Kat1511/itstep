/*
1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и
 false в противном случае.
*/
let str1="туруру";
let str2="траляля";

let strings = (str1, str2) => {

    let x = str1.toLowerCase().split("").sort().join('');
   let y =  str2.toLowerCase().split("").sort().join('');
   
    if (x === y){
        return true
    }
    return false

}

let result = strings();
console.log(result)