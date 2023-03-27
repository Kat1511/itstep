let select = document.querySelector('.selectID');
select.addEventListener('change', function() {
  select.style.backgroundColor = select.value
});
let box = document.querySelector('.box');

select.addEventListener('change', () => {
  box.style.backgroundColor=select.value;
});