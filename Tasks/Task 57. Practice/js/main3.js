//Дана кнопка (Показать) и div с текстом, который по-умолчанию скрыт. При нажатии на кнопку с надписью "Показать" отображать данный div и менять название кнопки на "Скрыть". При нажатии на кнопку с надписью "Показать" скрывать div и менять название кнопки на "Показать".
let div = document.querySelector(".text");
let btn = document.querySelector(".btn");


  let isBtnShow = false;
  btn.addEventListener("click", function() {
    if (isBtnShow ){
    div.style.display="block";
    btn.innerText = "Скрыть";
    isBtnShow  = false;
}
else
{
    div.style.display="none";
    btn.innerText = "Показать";
    isBtnShow  = true;
}
});