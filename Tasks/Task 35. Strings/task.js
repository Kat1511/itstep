// 1. Дана строка 'js'. Сделайте из нее строку 'JS'.
console.log("task1");
let a = 'js';
let b = a.toUpperCase();
console.log(a, b);


// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log("task2");
a = 'JS';
b = a.toLowerCase();
console.log(a, b);



// 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
console.log("task3");
a = 'я учу javascript!';
b = a.length;
console.log(b);


// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
console.log("task4");
a = 'я учу javascript!';
console.log(a.substr(6));
console.log(a.substring(2,6)); 
console.log(a.slice(2, -12));


// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
console.log("task5");
a = 'я учу javascript!';

console.log(a.indexOf('учу'));

// 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
console.log("task6");
var string = 'блабла бла блаблаблабла';
var n = 5;
var result;
if (string.length > n) {
  result = string.substr(0, n) + '...';
  console.log(result);
} else {
  console.log(string);
}


// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!'.

console.log("task7");
a = 'Я-учу-javascript!';
console.log(a.split("-").join("!"));


// 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
console.log("task8");
a = 'я учу javascript!';
console.log(a.split(' '));

// 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
console.log("task9");
a = 'я учу javascript!';
console.log(a.split(''));

// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
console.log("task10");

var date = '2025-12-31';
var dateNew = date.split("-").reverse().join(".");

console.log(dateNew);
// 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
console.log("task11");
a = ['я', 'учу', 'javascript', '!'];
b = a.join('+');
console.log(b);

// 12. Преобразуйте первую букву строки в верхний регистр.
console.log("task12");
a = 'я учу javascript!';
b = a.substr(0, 1).toUpperCase() + a.substr(1);
console.log(b);


// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.
console.log("task13");
a = 'я учу javascript!';
b = a.split(' ');
b[0] = 'Я';

b[1] = 'Учу';

b[2] = 'Javascript';
console.log(b.join(' '));


// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
console.log("task14");

a = 'var_test_text';
b = a.split('_');
for( i = 0; i<b.length; i++){

  b[0] = b[0].toLowerCase();
  b[i] = b[i].substr(0, 1).toUpperCase()+ b[i].substr(1);

}

console.log(b.join(''));
