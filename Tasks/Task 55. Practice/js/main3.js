
let box = document.querySelector('.box');
let num = document.querySelector('.num');

box.addEventListener('mouseenter', function () {
    box.classList.add('bg-black');
    num.classList.add('num2');
});
box.addEventListener('mouseleave', function () {
    box.classList.remove('bg-black');
    num.classList.remove('num2');
});