// Данно 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений. 

let x = [1, 2, 3, 4, 5], y = [6, 7, 1, 2]
let q = x.concat(y.filter((item) => x.indexOf(item) < 0))

console.log(q)