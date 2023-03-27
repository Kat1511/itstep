let li = document.querySelectorAll("li");

li.addEventListener('click', e => {
    let target = e.target;
    target.style.color = 'red';
    
});