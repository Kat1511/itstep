//4. Дано слово на русском языке. Посчитать количество слогов в слове.

let vowels = "уеыаоэяиюё";
let word = "электросоковыжималка";
let count = word.split("").filter((item) => vowels.includes(item)).length;

console.log(count);