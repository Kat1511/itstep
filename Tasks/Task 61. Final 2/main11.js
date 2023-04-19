//Реализовать калькулятор продуктов. Он будет представлять собой таблицу, в которую пользователь будет вносить свои покупки. Покупки вносятся с помощью формы (код_товара, название, цена_одной_единицы, количество). Кроме того, для каждого продукта предусмотреть кнопку удаления и редактирования. Редактирование также должно происходить по двойному клику по строке в таблице. Под таблицей должна выводится суммарная стоимость продуктов, которая должна пересчитываться при добавлении, удалении и редактировании продуктов.

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let errors = document.querySelectorAll(".error-text");

    if(errors.length){
        forEArray.from(errors).ach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        })
    }

    let hasError = false;
    
    let data = new FormData(this);

    data.forEach((value, name) => {
        if(value == ""){
            let span = document.createElement("span");
            span.className = "error-text"; 
            span.innerText = "Заполните поле";
            let field = this.querySelector(`[name="${name}"]`);
            if(name != "type"){
                field.insertAdjacentElement("afterend", span);
                field.parentElement.classList.add("error");
            } else {
                field.parentElement.parentElement.insertAdjacentElement("beforeend", span);
                field.parentElement.parentElement.classList.add("error");
            }
            hasError = true;
        }        
    });

    if(!hasError){
        let table = document.querySelector("tbody");
        let saveButton = this.querySelector("button.save");
        if(saveButton){
            let tr = document.querySelector(".edit-row");
            let index = 0;
            data.forEach((value, name) => {
                let td =  tr.children[index];
                td.innerText = value;
                index++;
            });
            saveButton.innerText = "Добавить";
            saveButton.classList.remove("save");
        } else {
            let tr = document.createElement("tr");
            data.forEach((value, name) => {
                let td =  document.createElement("td");
                td.innerText = value;
                tr.insertAdjacentElement("beforeend", td);
            });

            let tdAction = document.createElement("td");

            let editButton = document.createElement("button");
            editButton.innerText = "Редактировать";
            tdAction.insertAdjacentElement("beforeend", editButton);

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Удалить";
            tdAction.insertAdjacentElement("beforeend", deleteButton);

            tr.insertAdjacentElement("beforeend", tdAction);
            table.insertAdjacentElement("beforeend", tr);
            deleteButton.addEventListener("click", function(){
                this.closest("tr").remove();
            });

            editButton.addEventListener("click", function(){
                let editTr = document.querySelector(".edit-row");
                if(editTr){
                    editTr.classList.remove("edit-row");
                } 
                this.closest("tr").classList.add("edit-row");
                
                document.querySelector(`[name="name"]`).value = this.closest("tr").children[0].innerText;
                document.querySelector(`[name="kod"]`).value = this.closest("tr").children[1].innerText;
                document.querySelector(`[name="price"]`).value = this.closest("tr").children[2].innerText;
                document.querySelector(`[name="quantity"]`).value = this.closest("tr").children[3].innerText;
                document.querySelector("[type='submit']").innerText = "Сохранить";
                document.querySelector("[type='submit']").classList.add("save");
            });
        }
        this.reset();
    }


var tds = document.querySelectorAll("td");

let name1 =  document.querySelector('table').rows[1].cells[0].innerText;
let basket = document.querySelector(".basket_result");
let price = document.querySelector('table').rows[1].cells[2].innerText;
let quantity = document.querySelector('table').rows[1].cells[3].innerText;



for (let i = 0; i < tds.length; i++) {
	tds[i].addEventListener("dblclick", function func() {
		let input = document.createElement("input");
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);
		
		let td = this;
		input.addEventListener("blur", function() {
			td.innerHTML = this.value;
			td.addEventListener("dblclick", func);
		});
		
		this.removeEventListener("dblclick", func);

    
	});
}

if(price!=0 && quantity!=0){
    basket.innerText=`Вы заказали  ${name1} ${quantity} шт стоимость ${price*quantity} рублей`;
}

});
