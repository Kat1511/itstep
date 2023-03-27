document.querySelector("table").onmouseover = function(event){
    let td = event.target;
    let tds = td.parentElement.children;
    let columns = td.cellIndex;
    tds = document.querySelectorAll(`tr td:nth-child(${columns+1})`);
    let tr = document.querySelectorAll("tr");
    
    Array.from(tds).forEach(function(item){
        item.classList.add("hover");
        
    });
   


}



document.querySelector("table").onmouseout = function(event){
    let td = event.target;
    let tds = document.querySelectorAll("td.hover");

    Array.from(tds).forEach(function(item){
        item.classList.remove("hover");
    });   
}