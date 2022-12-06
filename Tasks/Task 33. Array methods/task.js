// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log("task1")
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = a.concat(b);
console.log(c);
// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log("task2")
let d = [1, 2, 3];

d.reverse();
console.log(d);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log("task3");
 d = [1, 2, 3];

 d.push(4,5,6);
 console.log(d);

//  4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
console.log("task4");
 d = [1, 2, 3];

 d.unshift(4,5,6);
 console.log(d);

//  5. Дан массив [7, 9, 3]. Выведите на экран первый элемент.
console.log("task5");
 d = [7, 9, 3];

 d.pop();
d.pop();
//6 console.log(d);6. Дан массив [7, 9, 3]. Выведите на экран последний элемент.
console.log("task6");
 d = [7, 9, 3];

 d.shift();
 d.shift();
 console.log(d);

//  7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
console.log("task7");
 d = [1, 2, 3, 4, 5];
 c = d.slice(0,3);
 
 console.log(c);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
console.log("task8");
 d = [1, 2, 3, 4, 5];
 c = d.slice(3,5);
 
 console.log(c);

//  9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
console.log("task9");

d = [1, 2, 3, 4, 5];
d.splice(0,3,1);
 
 console.log(d);

//  10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
console.log("task10");

d = [1, 2, 3, 4, 5];
d.splice(0,1);
d.splice(3,1);
 
 console.log(d);

//  11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

console.log("task11");

d = [1, 2, 3, 4, 5];

d.splice(2,0,'a', 'b', 'c');

 console.log(d);

//  12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log("task12");

d = [1, 2, 3, 4, 5];

d.splice(1,0,'a', 'b');
d.splice(6,0,'c');
d.splice(8,0,'e');

 console.log(d);
//  13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
console.log("task13");
d = [3, 4, 1, 2, 7];

console.log(d.sort());

// 14. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
console.log("task14");
d = [3, 4, 1, 2, 7];
сум
c = [];
d.forEach(function(elem) {
	c.push(elem * elem);
});
 console.log(c);   

// 15 Дан массив с числами. Найдите сумму этих чисел.
console.log("task15");
d = [3, 4, 1, 2, 7];

c = [];
d.forEach(function(elem) {
	c += elem;
});
 console.log(c); 

//  16. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
console.log("task16");
d = [3, 4, 1, 2, 7];

c = d.map(function(elem) {
	return elem * elem;
});
 console.log(c);

//  17. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
console.log("task17");
d = [3, 4, 1, 2, 7];
function func(elem){return elem > 0};
  

 console.log(d.every(func));

//  18. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
console.log("task18");

d = [3, 4, 1, 2, -7];
function func(elem){return elem < 0};
console.log(d.some(func));

// 19. Дан массив с числами. Найдите сумму этих чисел.
console.log("task19");
d = [3, 4, 1, 2, 7];
var sum=0;
sum = d.reduce(function(sum, elem) {
	return sum + elem;
});
console.log(sum);

// 20. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

d = [1, 2, 3, 0, 4, 5, 6];

var zero = 0;
var result = d.reduce(function(sum, elem) {
	if (elem == 0) {
		zero = sum;
	} else {
		return sum + elem;
	}
});
console.log(zero);



// 21. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0. 
d = [1, 2, 3, 0, 4, 5, 6];
 zero = 0;
 result = d.reduceRight(function(sum, elem) {
	if (elem == 0) {
		zero = sum;
	} else {
		return sum + elem;
	}
});
console.log(zero);


// 22. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 
d = [1, 2, 3, 0, 4, 5, 6];
let sumNumber = d.reduce((sum, elem, index) => {

    let ourSum = 0;
    while (ourSum <= 10) {
        return sum + elem;
    }
    index++


}, 0)
console.log(sumNumber);



// 23. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.
d = [1, 2, 3, 0, 4, 5, 6];
sumNumber = d.reduceRight((sum, elem, index) => {

    let ourSum = 0;
    while (ourSum <= 10) {
        return sum + elem;
    }
    index++


}, 0)
console.log(sumNumber);



// Комбинирование:
// 24. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.




