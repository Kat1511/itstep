//Дано предложение. Найти символ, который чаще всего в нем встречается.

let str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit";

let unique = str.toLowerCase().split("");
// let uniqueCount = [];

// let maxElement = uniqueCount[0];

// for(let i = 1; i < uniqueCount.length; i++){
//     if(uniqueCount[i] > maxElement){
//         maxElement = uniqueCount[i];
//     }
// }
// console.log(maxElement);


function findSymbol(unique){
    return unique.sort((a,b) => 
    unique.filter(v => v===a).length - unique.filter(v => v===b).length
    ).pop();
 }
 let result = findSymbol(unique);

 console.log(`Чаще всего встречается символ ${result}`)