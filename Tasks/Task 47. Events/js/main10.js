//8

let BTN_1 = document.getElementById('btn1');
let BTN_2 = document.getElementById('btn2');
let BTN_3 = document.getElementById('btn3');


let btns = ['BTN_1', 'BTN_2', 'BTN_2'];


const randomize = () => {
  let randomBtn = btns[Math.floor(Math.random() * btns.length)];
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  document.getElementById(randomBtn).style.background = randomColor;
}


let rgb = (num) => {
return Math.floor(Math.random() * num)
};


BTN_1.onclick = randomize;