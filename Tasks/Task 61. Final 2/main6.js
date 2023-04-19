//Дано предложение. Найти самое короткое слово в предложении.
let str = "Контрольная работа огонь";
let minString = "";
let wordArr = new Array();

minString = str.substring(str.lastIndexOf(" "));
 wordArr = str.split(" ");
 for (let i=0 in wordArr)
   {
     if (wordArr[i].length < minString.length)
       {
          minString = wordArr[i];
       }
   }


console.log("Самое короткое слово: " + minString);
