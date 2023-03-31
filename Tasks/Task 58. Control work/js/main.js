/*
1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и
 false в противном случае.
*/
let str1="Дядя";
let str2="ляля";
let myStrings = (str1, str2) => {
    let oneStr = str1.toLowerCase().split("").sort().join('');
   let twodStr =  str2.toLowerCase().split("").sort().join('');
    if (oneStr === twodStr){
        return true
    }
    return false

}

let result = myStrings();
console.log(result)