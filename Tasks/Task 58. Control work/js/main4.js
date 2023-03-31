//Написать функцию, принимающую в аргументах массив и возвращающую новый массив, в котором отсортированы все нечетные числа по возрастанию, четные числа по убыванию, но при этом сами чётные и нечетные числа остаются на своих местах. ([7, 3, 4, 9, 5, 2, 17] -> [3, 5, 2, 7, 9, 4, 17]).
let array = [7, 3, 4, 9, 5, 2, 17];
let res = [];
function num(array) {
    let even = array.filter(x => x % 2 == 0).sort((a, b) => b - a); 
    let odds = array.filter(x => x % 2 == 1).sort((a, b) => a - b);
    
   
    array.forEach(x => {
        if (x % 2 != 0) {
            res.push(odds.shift())
        }
        else {
            res.push(even.shift())
        }
    });
    return res
    
}


res = num(array);
console.log(res)
