function myapp() {
  const buttons = document.querySelectorAll(".button");
  const cards = document.querySelectorAll(".card");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      console.log(currentCategory);
      filter(currentCategory, cards);
    });
  });
}

myapp();


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// let places = document.querySelector('.place'),
//     output = document.querySelector('#output');

// places.addEventListener('click', function(e) {
//   let target = e.target;
//   if(places) {
//     target.classList.toggle('selected');

//     let selected = places.querySelectorAll('.selected');
//     if(selected.length > 0) {
//       output.innerHTML = '';
//       selected.forEach(function(e) {
//         let row = e.getAttribute('data-row'),
//             place = e.getAttribute('data-place');
//         output.innerHTML += `Место: ${place}, ряд: ${row};<br>`;
//       });
//     } else output.innerText = 'Ничего не выбрано';
//   }
// });


// let iconClick = document.querySelector(".mesto");
// iconClick.addEventListener("click", function () {
//   iconClick.classList.toggle("selected");
// });

// console.log("iconClick")
