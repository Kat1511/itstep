let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let input = document.querySelector("#number");
        let x = + input.value;
        let y = parseFloat(document.getElementById("number2").value);
        let p = document.querySelector("p");
        p.innerHTML = x+y;
       
    }   
)}