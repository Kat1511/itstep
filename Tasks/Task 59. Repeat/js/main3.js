// При наведении на четный элемент списка он подсвечивает красным цветом, а на нечетный элемент списка - синим.
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
let val = [];
li.forEach(function(item) {
  val += item.textContent;

})
let pieces = val.split("");
// let piecesI= pieces[i];
console.log(pieces);
console.log(val)

// li.forEach((pieces, i) =>{
   
//   pieces.addEventListener("mouseover", function() {
//     for (i = 0; i < pieces.length; i++){
//       if (pieces[i] % 2 === 0){
//         pieces[i].classList.add("red");
//       }
//     }           
//   });


// })



li.forEach((item, i) =>{
    item.addEventListener("mouseover", function() {
        if(i%2==0){
          li[i].classList.add("red") 
        }else{
           li[i].classList.add("blue") 
        }
        
    });

    item.addEventListener("mouseleave", function() {
        if(i%2==0){
          li[i].classList.remove("red") 
           
        }else{
           li[i].classList.remove("blue")
        }
        
    })
    
})
