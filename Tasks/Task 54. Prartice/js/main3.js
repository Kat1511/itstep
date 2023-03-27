function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".first").onclick = function(){
    let chess = document.querySelector(".chess");
    if(chess)
        chess.remove();

    chess = document.createElement("div");
    chess.classList.add("chess");

    let random = getRandomNumber(0,16);

    document.querySelectorAll(".box>div").item(random).append(chess);
}

//3.2

document.querySelector(".second").onclick = function(){
    let square =  document.querySelectorAll(".box>div");


    Array.from(square).forEach(function(square){
        square.classList.toggle("white");
        square.classList.toggle("black");
    });
}



//3.3

let rotate = 0;

document.querySelector(".th").onclick = function(){
    rotate = rotate + 90;

    document.querySelector(".box").style.transform = `rotate(${rotate}deg)`;
}