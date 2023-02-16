var elem = document.querySelector("#first-element");
console.log(elem.classList);
elem.classList.add("www");
elem.classList.remove("www");
console.log(elem.classList.contains("www"));
elem.classList.add("www");
console.log(elem.classList);
const search = document.querySelector('#first-element');
for (let i = 0; i < search.classList.length; i += 1) {
    console.log(search.classList[i]);
}

 let headingElement = document.querySelector('#first-element');
 headingElement.style.color = 'red';
 headingElement.style.fontSize = "30px";
 headingElement.style.border = "1px solid red";
 var span = document.createElement('span');
    span.appendChild(document.createTextNode('мой любимый спан'));
    elem.appendChild(span);

const count = document.querySelector('#first-element');

count.addEventListener('click', function () {
    console.log(this.tagName.toLowerCase());
});
const list = ['createElement', 'appendChild', 'insertBefore'];

    const list2 = document.querySelector('#first-element');

for (let i = 0; i < list.length; i += 1) {
    const list3 = document.createElement('li');
    list3.innerHTML = list[i];
    list2.appendChild(list3);
    }


//2

    
const spanBefore = document.querySelector("#second-element");
    spanBefore.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
const spanAfter = document.querySelector("#second-element");
    spanAfter.insertAdjacentHTML('afterEnd', '<span>!!!</span>');
const spanBegin = document.querySelector("#second-element");
    spanBegin.insertAdjacentHTML('afterBegin', '<span>!!!</span>');
const spanEnd = document.querySelector("#second-element");
    spanEnd.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');
//3

const task3 = document.querySelector('#third-element');

    task3.firstElementChild.style.color = 'red';

    const task3_2 = document.querySelector('#third-element');

        task3_2.lastElementChild.style.color = 'red';

    const task3_3 = document.querySelector('#third-element');
        const elems = task3_3.children;

        for (let i = 0; i < elems.length; i += 1) {
            elems[i].innerHTML = `${elems[i].innerHTML}!`;
        }
//4

const task4 = document.querySelector('#fourth-element');
        const elem22 = task4.previousElementSibling;
        elem22.innerHTML = `${elem22.innerHTML}!`;

 const task4_2 = document.querySelector('#fourth-element');
        const elem23 = task4_2.nextElementSibling;
        elem23.innerHTML = `${elem23.innerHTML}!`;
const task4_3 = document.querySelector('#fourth-element');
        const elem24 = task4_3.nextElementSibling;
        const elem24Next = elem24.nextElementSibling;
        elem24Next.innerHTML = `${elem24Next.innerHTML}!`;

//5

const task5 = document.querySelector('#fifth-element');
        const elem25 = task5.parentElement;
        elem25.style.backgroundColor = 'red';

const task5_2 = document.querySelector('#fifth-element');
        const elem26 = task5_2.parentElement;
        const elem26Parent = task5_2.parentElement;
        

        elem26Parent.style.backgroundColor = 'yellow';