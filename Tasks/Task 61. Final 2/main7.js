//Дано 2 массива. Проверить, можно ли один массив путем перестановки элементов получить из второго массива.


const compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);

let array1 = [11, 22, 33];
let array2 = [21, 22, 33];

console.log(compareArrays(array1, array2));

