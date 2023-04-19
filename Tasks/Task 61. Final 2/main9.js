//Дано дата в формате "день.месяц.год". Вывести дату, которая будет через 10 дней.

let str = "10.01.2016";
let arr = str.split('.').reverse();

let date = new Date(arr);
date.setDate(date.getDate() + 10);

console.log(date); 
