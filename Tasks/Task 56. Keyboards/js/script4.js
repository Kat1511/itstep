
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    let block =document.querySelectorAll(".block");
    let block0 = document.querySelector(".block-0");
    if(event.key == "0"){
        block0.classList.toggle("color");
        block.classList.remove();
        
   }
   let block1 = document.querySelector(".block-1");
    if(event.key == "1"){
        block1.classList.toggle("color");
   }
   let block2 = document.querySelector(".block-2");
    if(event.key == "2"){
        block2.classList.toggle("color");
   }
   let block3 = document.querySelector(".block-3");
    if(event.key == "3"){
        block3.classList.toggle("color");
   }
   let block4 = document.querySelector(".block-4");
    if(event.key == "4"){
        block4.classList.toggle("color");
   }
   let block5 = document.querySelector(".block-5");
    if(event.key == "5"){
        block5.classList.toggle("color");
   }
   let block6 = document.querySelector(".block-6");
    if(event.key == "6"){
        block6.classList.toggle("color");
   }
   let block7 = document.querySelector(".block-7");
    if(event.key == "7"){
        block7.classList.toggle("color");
   }
   let block8 = document.querySelector(".block-8");
    if(event.key == "8"){
        block8.classList.toggle("color");
   }
   let block9 = document.querySelector(".block-9");
    if(event.key == "9"){
        block9.classList.toggle("color");
   }
});                                  