//6
document.getElementById("btn_click").onclick = function(){
    
    let href = document.querySelectorAll("a").item(0).href;
    document.querySelectorAll("a").item(0).textContent = href;
    return false;
}