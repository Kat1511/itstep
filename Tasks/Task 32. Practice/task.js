// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function cb() {
  console.log('callback');
}


function test(num, func) {
	console.log(func(num));
}

test(2, function(num) {
	return num * num;
});


// 2. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
console.log("task2");
function task2 (a,b,c,){
    return (a - b)/c;
}

let a=4, b=3, c=2, d;
 console.log(d=(a - b)/c);


// 3. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
 console.log("task3");
let day=3;
function dayDay(day){

if (day == 1) {
    console.log('Понедельник');
} else if (day == 2) {
    console.log('Вторнк');
} else if (day == 3) {
    console.log('Среда');
} else if (day == 4) {
    console.log('Четверг');
} else if (day == 5) {
    console.log('Пятница');
} else if (day == 6) {
    console.log('Суббота');
} else if (day == 7) {
    console.log('Воскресенье');
}
return day;
}



console.log(dayDay(day));


// 4. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
console.log("task4");

function func(a,b) {
     return a == b;
}
    console.log(func(4,4));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
console.log("task5");

function func(a,b) {
return a + b > 10;
}
console.log(func(6,5));


// 6. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
console.log("task6");

function func(a) {
    return a < 0;
}
    console.log(func(10));


// 7. Сделайте функцию, которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
console.log("task7");
function func(a) {
    return a%2==0;
}
    console.log(func(11));


// 8. Сделайте функцию, которая параметром принимает число и возвращает массив его делителей
console.log("task8");

function func (n) {
i = n;
arr = [];
while (i > 0) {
if (n % i == 0) {
arr.push(i)
}
i--;
}
return arr;
}
console.log(func(100));


