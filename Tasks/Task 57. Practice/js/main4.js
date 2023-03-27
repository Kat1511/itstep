//Дано поле ввода, кнопка и текст. В поле ввода разрешить вводить не более одного символа. Если в поле ввода введен один символ, то при нажатии на кнопку неоходимо подсчитать - сколько раз этот символ стречается в тексте.
var input = document.querySelector('.add');
let text = document.querySelector(".text").textContent;
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let count = 0;
let arr = Array.from(text);


btn.addEventListener("click", function(){
    arr.forEach(function (element) {
        if(input.value==element){
            count++
        }
     })
     result.innerText=count;
})

