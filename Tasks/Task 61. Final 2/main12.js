function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
 }
 
 function getFirstDayOfMonth(month, year) {
    return new Date(year, month - 1).getDay();
 }
 
   function generateCalendar(month, year) {
    let daysInMonth = getDaysInMonth(month, year);
    let firstDayOfMonth = getFirstDayOfMonth(month, year);
    let currentDayOfMonth = 1;
    let calendarTable = document.createElement("table");
    calendarTable.innerHTML = ` <thead>
      <tr>
       <th>Пн</th>
       <th>Вт</th>
       <th>Ср</th>
       <th>Чт</th>
       <th>Пт</th>
       <th>Сб</th>
       <th>Вс</th>
      </tr>
     </thead>
     <tbody>
     </tbody>
    `
    let calendarTableBody = calendarTable.querySelector("tbody");
    for (let week = 0; week < 5; week++) {
     let newRow = document.createElement("tr");
     for (let dayOfWeek = 1; dayOfWeek < 8; dayOfWeek++) {
      let newCell = document.createElement("td");
      if (week === 0 && dayOfWeek < firstDayOfMonth) {
       newCell.innerHTML = "";
      } else if (currentDayOfMonth > daysInMonth) {
       newCell.innerHTML = "";
      } else {
       newCell.innerHTML = currentDayOfMonth.toString();
       currentDayOfMonth++;
      }
      newRow.appendChild(newCell);
     }
     calendarTableBody.appendChild(newRow);
    }
    return calendarTable;
   }
 
   document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let month = parseInt(document.querySelector("#month").value);
    let year = parseInt(document.querySelector("#year").value);
    let calendar = generateCalendar(month, year);
    document.querySelector("#calendar").innerHTML = "";
    document.querySelector("#calendar").appendChild(calendar);
   });
