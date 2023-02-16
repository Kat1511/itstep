var block = document.createElement("article");
document.body.appendChild(block);
block.classList = "news__item";
let a = document.createElement("a");
block.appendChild(a);
div1 = document.createElement("div");
a.appendChild(div1);
a.href = "/news/we-offer-a-new-fertilizer-potassium-salt-60-nod/";
div1.classList = "news__img";
img = document.createElement("img");
div1.appendChild(img);
img.innerHTML=`<img src="/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp" alt="We offer a new fertilizer – potassium salt 60% NOD">`
let time = document.createElement("time");
div1.appendChild(time);
time.innerHTML="06.01.2023";
div2 = document.createElement("div");
a.appendChild(div2);
div2.classList = "news__desciption";
div3 = document.createElement("div");
div2.appendChild(div3);
div3.classList = "news__title";
let h4 = document.createElement("h4");
div3.appendChild(h4);
h4.innerHTML="We offer a new fertilizer – potassium salt 60% NOD";
div4= document.createElement("div");
div2.appendChild(div4);
div4.classList = "news__text";
let p =document.createElement("p");
div4.appendChild(p);
p.innerHTML="We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD.";
let div5= document.createElement("div");
div2.appendChild(div5);
div5.classList = "news__more";
let span = document.createElement("span");
div5.appendChild(span);
span.innerHTML="more";


// 2. Удалить из полученного кода все тег span, но оставить его содержимое.

    let newSpan = span.innerHTML
  span.remove();
  div5.innerHTML=newSpan;


//3. Времени добавить  красный фон, белый цвет и внутренние отступы в 25px для даты.
time.style.backgroundColor = "red";
time.style.color = "white";
time.style.paddingLeft = "25px";

//9. 
h4.style.fontWeight = "500";
h4.style.lineHeight = "150%";
h4.style.color = "#000";
h4.style.textTransform= "uppercase";
//4. Увеличить шрифт заголовка на 2px.

let newH4 = document.querySelectorAll("h4");
if (newH4.length) {
    Array.from(newH4).forEach(item => {
        let styles = getComputedStyle(item);
        let fontSize = parseInt(styles.fontSize, 10);
        item.style.fontSize = `${fontSize + 2}px`
    })
}

    // 5. Удалить ссылку из разметки, не меняя остальной структуры, но при этом сохранить ее адрес.
let aHtref=a.href.innerHTML;
    let newA = a.innerHTML
  a.remove();
  block.innerHTML=newA;
 
div6= document.createElement("div");

block.appendChild(div6);
div6.innerHTML=a.href;

//7. Добавить у новой ссылки атрибут title со значением заголовка новости.
div6.title=h4.innerHTML;

//8. Тег p заменить на тег b.


let news = document.querySelectorAll(".news__text");
Array.from(news).forEach(function(p){
        p.innerHTML = `<b>${p.innerText}</b>`;
    });

;
//9. Тегу h4 -добавить следующие стили:
    // font-weight: 500;
    // line-height: 150%;
    // text-transform: uppercase;
    // color: #000;


  
