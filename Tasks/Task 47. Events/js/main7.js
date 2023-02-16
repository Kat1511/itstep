//5
let btn = document.querySelector(".btn_click");
if(btn){
    btn.addEventListener("click", function(){
        let input = document.querySelector("#number1");
        let num = input.value
        let p = document.querySelector("p");
        if (Number.isFinite(+num)){
            p.innerText = `${num} Число`
        }
        else
            p.innerText = `${num} Не число`
        
    })
}