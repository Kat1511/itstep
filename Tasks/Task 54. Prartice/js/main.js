document.querySelector(".box").onmouseenter = function (event) {
    event.target.classList.add("bg-blue")
}
//1.2
let box = document.querySelector('.box');
box.addEventListener('click', e => {
    let target = e.target;
    target.style.height = '800px';
    target.style.width = '800px';
});
//1.3
box.addEventListener('contextmenu', e => {
    let target = e.target;
    target.style.height = '400px';
    target.style.width = '400px';
});


//2
