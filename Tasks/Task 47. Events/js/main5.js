//3
let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

    let classList = document.getElementsByTagName("div").item(0).classList;
    let ol = document.createElement("ol");

    for(let i = 0; i < classList.length; i++){
        let li = document.createElement("li");
        li.textContent = classList[i];
        ol.append(li);
    }

    document.getElementsByTagName("div").item(0).append(ol);
       
    }   
)}