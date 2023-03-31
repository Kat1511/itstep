//Напишите функцию, которая принимает строку на английском языке в качестве аргумента и возвращает количество гласных, содержащихся в этой строке.

function num(string) {
      let count = 0;
    
      for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u'){
          count+= 1;
        }
      }
      
      return count;
}

console.log(num('Yellow Submarine'));