//2. Дан полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 61. Practice\task.txt"). Вывести количество папок, которые входят в заданный путь.
let link = "D:\\ITStep\\itstep2\\Tasks\\Task 61. Practice\\task.txt";

let folder = "\\";

let count = link.split(folder).length - 1;
console.log(count);
