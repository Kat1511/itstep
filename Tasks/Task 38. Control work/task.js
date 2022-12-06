// 1. Дано число N. Получить массив квадратов чисел от 1 до N.
console.log("task1");
let a = [1,2,3,4,5,6,7,8,9,10];
let n =5;
let b =[];
let result = a.forEach(function(item){
    if(item>n){
        item=item**2;
        b.push(item);
    }
    return b;
});
console.log(b);



// 2. Дан числовой массив. Что больше сумма положительных чисел или модуль суммы отрицательных чисел. (Модуль числа - значение числа без знака).
console.log("task2");
a = [1,2,3,4,5,6,7,-8,-9,-10];
var sum1 = 0;
var sum2 = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0){
        sum1 += a[i];
    }
}
for (var i = 0; i < a.length; i++) {
    if (a[i] < 0){
        sum2 += a[i];
    }
}
if(sum1>Math.abs(sum2)){
    console.log("сумма положительных чисел больше модуля суммы отрицательных чисел")
}else{
    console.log("сумма положительных чисел меньше модуля суммы отрицательных чисел")
}



// 3. Дан числовой массив. Удалить все нулевые элементы из массива.
console.log("task3");
a = [1,2,3,0,5,6,7,0,0,0];
b = a.filter((item) => item >0);

console.log(b)

// 4. Дан числовой массив. В массиве чисел найти два самых больших элемента, не используя функцию sort().
console.log("task4");
a = [1, 2, 3, 4, 5, 9, 10];
var m1 = Math.max (...a);

var m2=Math.max.apply(Math,a.filter(function(el){return el < Math.max.apply(Math,a);}));



console.log(m1,m2)

// 5. Дан числовой массив. Поменять максимальный и минимальный элемент местами. (максимальный и минимальный элементы не повторяются)
console.log("task5");
a = [1, 2, 3, 4, 5, 9, 10];
var minIndex = a.indexOf(Math.min(...a));
var maxIndex = a.indexOf(Math.max(...a));
 
[a[minIndex], a[maxIndex]] = [a[maxIndex], a[minIndex]]
console.log(a)


// 6. Дан числовой массив. Вывести все элементы, которые больше предыдущего элемента.
console.log("task6");
a = [158, 164, 742, 99, 155, 250, 240, 87];


b = a.flatMap((x, i, a) => x < a[i + 1] ? a[i + 1] : []);

console.log(b);

// 7. Дан числовой массив и 2 числа N, M, причем N < M. Найти все элементы, которые лежат в интервале от N до M.
console.log("task7");
a = [1, 2, 3, 4, 5, 9, 10];
var N=2;
var M=9;
b = a.filter(x => x > N && x < M)
console.log(b);

// 8. Дано число. Получить новое число, состоящее из цифр данного числа, расставленных в порядке убывания.
console.log("task8");
var num =123456;
b=Array.from(String(num)).map(i=>Number(i)).reverse().join("");

console.log(b);

// 9. Дано дата в формате "день.месяц.год". Найти порядковый номер дня относительно начала года.
console.log("task9");



// 10. Дан массив чисел. Найти число в массиве с наибольшим суммой цифр.
console.log("task10");
a = [1, 11, 111, 1111];

b=a.map(i=>x+=i, x=0).reverse();

console.log(b[0]);

// 11. Дано предложение. Найти длину самого короткого слова.
console.log("task11");
function findShort(s){
 return s.split(" ").sort(function(a,b){
   return a.length - b.length;
 }).shift()
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps").length);
// 12. Даны 2 слова. Удалить из обоих слов буквы, которые встречаются в обоих словах.
console.log("task12");

var str = "Мама Папа";

var arr = str.split(''), letters = {}, start = 0, words = [];
result=0;

words.push(str.substr(start));

words.forEach(function (word) {
    word.split('').forEach(function (letter, i) {
        if (!letters[letter] && -1 != word.indexOf(letter, i + 1)) {
            letters[letter] = 1;
        }
    });
});

result = arr.filter(function (v) {
    return !letters[v];
}).join('');
console.log(result);


// 13. Дано предложение. Вывести слова в предложение в порядке убывания.
console.log("task13");
let text = 'Я так люблю программировать';
const getWordLengths = str => str.split(' ').map(word => word.length).sort((a, b) => b - a);
console.log(getWordLengths(text));


// 14. Дано предложение. Вывести частоту стречаемости каждого символа в строке.
console.log("task14");

var str = 'abcccdddd';
b=Array.from(str).reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
console.log(b);
// 15. Дано слова. Получить 2 новые строки, где 1 строка состоит из гласных букв слова в верхнем регистре, а вторая строка - из согласных в нижним регистре.
console.log("task15");
let vowels = "уеыаоэяиюё";
let word = "электросоковыжималка";
let consonants = "йцкнгшщзхфвпрлджчмтьб";
let count = word.split("").filter((item) => vowels.includes(item)).join("");
count=count.toUpperCase();
let count2 = word.split("").filter((item) => consonants.includes(item)).join("");

console.log(count,count2);

// 16. Дана строка. Подсчитать количество цифр встречающихся в строке.
console.log("task16");
// str = "abcc333cdddd";
// b=[];
// str=str.split("").forEach(function(i){
//    if (str[i]>0){
//   b.push(i);
// }
// return b;
// });


// console.log(b);
// 17. Дана строка. Вывести символы, которые в ней повторяются.
console.log("task17");
str = "abcc333cdddd";
var tempArry={};

for (var i=0; i < str.length; i++) {
    if (tempArry[str[i]]) {
        tempArry[str[i]].push(str[i]);
    } else {
        tempArry[str[i]] = [];
        tempArry[str[i]].push(str[i]);
    }
}

console.log(tempArry);


// 18. Дан числовой массив. Заменить каждый элемент массива с нечетным индексом на ноль.
console.log("task18");



// 19. Дан числовой массив. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.
console.log("task19");
a = [158, 164, 0, 99, 0, 250, 240, 87];
b=[];
for (let i = 0; i = 0; i++)
    {
        if (a[i] == 0){
            b=b.push(a[i]);
        }
    }
    
console.log(b);



// 20. Дан числовой массив. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент.




