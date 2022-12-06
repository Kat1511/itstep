// 1. Посчитать количество слов в строке.
console.log("task1")
var str = 'текст текст текст текст текст';
var arr = str.split(/\s+/);
console.log(arr.length);


// 2. Вывести последнее слово в предложении.
console.log("task2")
str = 'текст1 текст2 текст3 текст4 текст5';
arr = (str.split()[-1]);
console.log(arr);


// 3. Дано слово. Вывести набор букв, из которых состоит это слово без повторений.
console.log("task3")
str = "abczacg";
arr = str.match();
console.log(arr);
// 4. Даны 2 слова. Проверить, состоят ли они из одних и тех же букв.
console.log("task4")


// 5. Дано предложение. Проверить, есть ли в этом предложение заданное слово.
console.log("task5")
str = 'текст1 текст2 текст3 текст4 текст5';
var word ='текст1';
if()


// 6. Удалить из предложения все знаки препинания (. , : ; ! ? -).
console.log("task6")
let simbol = ".,:;!?-";
str = "a,g,;sdf,!sg";

let newStr = str.split("").filter(function(item){
    return simbol.indexOf(item) == -1;
}).join("");

console.log(newStr);