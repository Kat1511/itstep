//3. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые меньше медианы среди  всех элементов массива.

let arr = [1,3,6,4,3,3,5,6];
let result =[];

let findMedian = (arr = []) => {
    let sorted = arr.slice().sort((a, b) => {
        return a - b;
    });
    if(sorted.length % 2 === 0){
        let first = sorted[sorted.length / 2 - 1];
        let second = sorted[sorted.length / 2];
        
        return (first + second) / 2;
    }
    else{
        let mid = Math.floor(sorted.length / 2);
    return sorted[mid];
    };
   };

   let median = findMedian(arr);
   console.log(median);

   arr.forEach(function(item) {
    if(item<median){
       result.push(item);
    }
  });

   console.log(result);
 