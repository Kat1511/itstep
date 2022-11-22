// 1. Разрабоать функцию для генерации случаного целого числа от min до max.

function randomNumber(min, max){ 
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

function fillRandomArray(a,n){
    for(let i=0; i<n; i++){
        a[i] = randomNumber(1,3);
    }
}
let x=randomNumber(1,3);
let a=[];
fillRandomArray(a,5);
console.log(5);





// 2. Разработать функцию для заполнения массива случаныйми числами.
function fillRandomArray(min, max){

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}

 









