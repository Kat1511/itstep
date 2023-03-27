let calc = document.querySelectorAll("input[name='calculator']");

for(let i = 0; i < calc.length; i++){
    calc[i].onchange = function(){

        let x = +num1.value;
        let y = +num2.value;
        let result;
        let operation = this.value;
       
        
        switch(operation){
            case "+":
                result = x+y; break;
            case "-":
                result = x-y; break;    
            case "*":
                result = x*y; break;
            case "/":
                result = x/y; break; 
        }
    
        document.querySelector("div").innerHTML = result;
    }
}
