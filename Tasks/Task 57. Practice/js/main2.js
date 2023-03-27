//2. Дана форма с одним полем ввода.
// - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
// - при убирании курсора из поля возвращать фон в начальное состояние.

let text = document.querySelector(".text");
text.addEventListener('focus', function(){
    this.style.backgroundColor = 'blue';
  })
  text.addEventListener('blur', function(){
    this.style.backgroundColor = '';
  })