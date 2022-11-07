// 1. Дан массив из n элементов и число k<n. Вывести последние k элементов массива.
let a=[];
let min=1, max=100, n=10;
for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(a);

let k=3;

for(let i=a.length-k; i<a.length; i++){
 console.log(a[i]);
 
}



// 2. Дан массив из n элементов и число k. Вывести все элементы кратные числу k.
console.log("task2");
k=4;
for(let i=0; i<a.length; i++){
    if(a[i] % k == 0){
        console.log(a[i]);
    }
}

// 3. Дан массив из n элементов. Вывести сумму максимального и минимального элемента.
console.log("task3");
let maxElement = a[0];

for(let i = 1; i < a.length; i++){
    if(a[i] > maxElement){
        maxElement = a[i];
    }
}console.log(maxElement);

let minElement = a[0];
for(let i = 1; i < a.length; i++){
    if(a[i] < minElement){
        minElement = a[i];
    }
}
console.log(minElement);
console.log(minElement+maxElement);

// 4. Дан массив из n элементов. Поменять максимальный и минимальный элементы местами.
console.log("task4");
console.log(a)

let maxIndex = 0;
for(let i = 1; i < a.length; i++){
    if(a[i] > a[maxIndex]){
        maxIndex = i;
    }
}
let minIndex = 0;
for(let i = 1; i < a.length; i++){
    if(a[i] < a[minIndex]){
        minIndex = i;
    }
}
// 5. Дан массив из n элементов. Создать 2 новых массива. В 1 первый записать все элементы с четными индексами, во 2 - с нечетными.
console.log("task5");
let b =[];
let c=[];

for(let i = 0; i < a.length; i++) {  
    if (a[i] % 2 === 0) {
        b.push(a[i]);
    } else {
        c.push(a[i]);
    }
}console.log([b]);
console.log([c]);

// 6. Дан массив из n элементов. Увелить все нечетные элементы на 1 и уменьшить все четные в 2 раза.
console.log("task6");

for(let i = 0; i < a.length; i++) {  
    if (a[i] % 2 === 0){
        a[i]=a[i]/2;
    }else {
        a[i]++;
    }

}console.log(a);

// 7. Дан массив из n элементов и некоторое число x. Проверить наличие числа x в массиве.
console.log("task7");
let x=2;
for (i = 0; i < a.length; i++) {
    if (a[i] === x) {
        console.log("Число присутствует в массиве");
    }else{
        console.log("Числа нет в массиве")
    }
}

// 8. Дан массив из n элементов и число k<n. Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.
console.log("task8");
k=8;

for(i = k;i<=n;i++){
    a[i-1] =a[i];
}
console.log(a);



// 9. Дан массив из n элементов. Проверить, упорядочен ли массив по возрастанию или убыванию.
console.log("task9");
let grow = true, 
less = true;

for(i = 1; i < n; i++){
    if(a[i] > a[i-1]){
        less = false;
    }
    if(a[i] < a[i-1]){
       grow = false;
    }
}
if(less){
    console.log("По убыванию");
} else if(grow){
    console.log("По возрастанию");
}
 else {
    console.log("Не упорядочен");
}



// 10. Дан массив из n элементов. Удалить все повторяющие элементы (удалить и сдвинуть следующие за ним).
console.log("task10");

for(i = 0; i < n-1; i++){


}