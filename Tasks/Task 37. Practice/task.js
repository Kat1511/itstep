// 1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив этим значением. (используя fill)
console.log("task1");
let a = [], n = 3, value = 3;
a.length = n;
let b = a.fill(value,0,n);
console.log(b);


// 2. Найти сумму только положительных элементов массива.
console.log("task2");
let c = [1,3,4,-6,-10];
let sum=0;

c.forEach((el) => sum += el < 0 ? el : 0);

console.log(sum);

// 3. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений.
console.log("task3");
a = [1,2,1,2];
b = [1,1,1,1];
c = [-2,-2,-2];
var d = [].concat(a,b,c);
d=d.sort();

console.log(d);



// 4. Проверить 2 массива на полное совпадение.
console.log("task4");
a = [1,2,1,2];
b = [1,1,1,1];

let result = a.every(function(elem,index){
    return elem == b[index]; 
});
console.log(result);




// 5. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3]. Должно работать для любых 2 аналогичных массивов.
console.log("task5");
a = [1,3,6,4,3,3,5,6];
b = [1,3];

let excludeArray = a.filter(function(elem) {
    return b.includes(elem) == false; 
});

console.log(excludeArray);


// 6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего арифметического значения всех элементов массива.
console.log("task6");
let array = [1, 2, 3, 4, 5]
let allNums = array.filter(elem => elem > array.reduce((x, y) => x + y) / array.length);

console.log(allNums);

// 7. Дано предложение на русском языке. Определить, является ли оно панграммой.
console.log("task7");

var str = 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр';

function pangrams(str) {
  const alphabet = "абвгдежзиклмнопрстуфхчшщьэюя";
  const regex = /\s/g;
  const lowercase = str.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return ("not pangram");
    }
   }
  
  return "pangram";
}


// 8. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.
console.log("task8");
var num = '12345';
console.log(('' + num).split('').reverse().join(''));



// 9. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие.
console.log("task9");
arr = [26,1,7,48,5, 87,97];
var A =10;



// 10. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, но их нету в 3 массиве.
console.log("task10");


