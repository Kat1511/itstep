//1. Дан числовой массив. Удалить все отрицательные элементы в нем, а все положительные элементы умножить на -1.


var d = [3, 4, 1, 2, -7];
var c =[];
function func(elem){
    return elem > 0
};
d.filter(func);
function func(elem){
    if (elem>0)
    elem*-1;
    return elem
};
console.log(d);


// 2. Дан числовой массив. Сформировать два новых массива: в первом - четные элементы массива, во втором - нечетные элементы. Сравнить суммы полученных массивов (определить большую).
 console.log("task2"); 

d = [3, 4, 1, 2, 7];
var b =[];
c = [];
var sum1 =0;
var sum2 =0;
d.forEach(function(elem) {
	if (elem %2==0){
        b.push(elem)
    }
    else{
        c.push(elem) 
    }

});
console.log(b); 
 console.log(c); 

sum1 = b.reduce(function(sum, elem) {
	return sum + elem;
});
sum2 = c.reduce(function(sum, elem) {
	return sum + elem;
});
console.log(sum1); 
console.log(sum2); 
if (sum1>sum2){
    console.log("Массив b больше массива c")
}else{
    console.log("Массив c больше массива b")
}


// 3. Дан числовой массив. Сформировать два новых массива: в первом - элементы с четными индексами, во втором - элементы с нечетными индексами. Сравнить суммы полученных массивов (определить большую).




// 4. Дан числовой массив. Найти максимальный элемент массива.
 console.log("task4");
d = [3, 4, 1, 2, -7];
var max = d => d.reduce((x, y) => Math.max(x, y));
 

console.log("Max:", max(d));



// 5. Дан числовой массив. Найти разность максимального и мининального элемента массива.

 console.log("task5");
 d = [3, 4, 1, 2, 7];
var min = d => d.reduce((x, y) => Math.min(x, y));
 max = d => d.reduce((x, y) => Math.max(x, y));
 
console.log("Min:", min(d));
console.log("Max:", max(d));

var difference = max(d)-min(d);

console.log(difference);





// 6. Дан числовой массив и некоторое число x. Удалить все элементы больше заданного числа x. 
 console.log("task6");
 d = [3, 4, 1, 2, 7];
 var x=3;
 if (elem>x){
    d.pop()
 }

console.log(d);