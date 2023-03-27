const form = document.getElementById("reg_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

      let data = new FormData(this);
    
    let errors = document.querySelectorAll(".error-text");
    if (errors.length) {
        Array.from(errors).forEach(errorSpan => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        })
    }

    let hasError = false;

    // let locality = document.getElementById("name");
    // let region = document.getElementById("region");


    let arrayInput = [locality, region];

    arrayInput.forEach((type) => {
        if (type.value == "") {
            let span = document.createElement("span");
            span.className = "error-text";
            span.innerText = "Заполните поле";
            type.insertAdjacentElement("afterend", span);
            type.parentElement.classList.add("error");
            hasError = true;
        }
    });

    let typeLocality = ["city", "distr", "village", "agr", "station"];
    let checked = typeLocality.some(type => {
        return document.querySelector(`#${type}`).checked
    });

    if (!checked) {
        let span = document.createElement("span");
        span.className = "error-text";
        span.innerText = "Выберите тип населенного пункта";
        document.querySelector(".form-control-radio").parentElement.insertAdjacentElement("beforeend", span);
        hasError = true
    }

    if (!hasError) {
        let locality = document.getElementById("name").value;
        let region = document.getElementById("region").value;
        let tr = document.createElement("tr");

        let tdLocality = document.createElement("td");
        tdLocality.innerText = locality;

        let tdRegion = document.createElement("td");
        tdRegion.innerText = `${region} район`;

        let tdTypeLocality = document.createElement("td");
        let typeLocality = document.getElementsByName("type-locality");

        for (let element of typeLocality) {
            if (element.checked) {
                tdTypeLocality.innerText = `${element.value}`;
            }
        }

        let tdAction = document.createElement("td");

        let editButton = document.createElement("button");
        editButton.className = "stule-btn btn-4 btn-remove";
        editButton.innerText = "Редактировать";
        tdAction.insertAdjacentElement("beforeend", editButton);

        let deleteButton = document.createElement("button");
        deleteButton.className = "stule-btn btn-4 btn-delete";
        deleteButton.innerText = "Удалить";
        tdAction.insertAdjacentElement("beforeend", deleteButton);

        tr.insertAdjacentElement("beforeend", tdLocality);
        tr.insertAdjacentElement("beforeend", tdRegion);
        tr.insertAdjacentElement("beforeend", tdTypeLocality);
        tr.insertAdjacentElement("beforeend", tdAction);

        let tbody = document.querySelector("tbody");
        tbody.insertAdjacentElement("beforeend", tr);

        deleteButton.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
        })

        editButton.addEventListener("click", function () {
            let locality = this.closest("tr").firstElementChild.innerText;
            let region = this.closest("tr").firstElementChild.nextElementSibling.innerText;
            let typeLocality = document.getElementsByName("type-locality");
            let type = Array.from(typeLocality).forEach(item => {
                if (item.checked) {
                    typeValue = item.value;
                }
            })
          

            document.getElementById("name").value = locality;
            document.getElementById("region").value = region;

            let trEdit = document.querySelector(".edit");
            if (trEdit) {
                trEdit.closest("tr").classList.remove("edit");
            }
            this.closest("tr").classList.add("edit");
        })
    }
})

let buttonSave = document.querySelector(".btn-save");

buttonSave.addEventListener("click", function () {
    let trEdit = document.querySelector(".edit");
    if (trEdit) {
        let locality = document.getElementById("name").value;
        let region = document.getElementById("region").value;

        trEdit.firstElementChild.innerText = locality;
        trEdit.children[1].innerText = region;
        trEdit.classList.remove(".edit")
        document.querySelector("input").value = "";
    }
})