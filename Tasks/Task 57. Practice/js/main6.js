
let cells = document.querySelectorAll('#field td');
start(cells);

function start(cells) {
	for (let cell of cells) {
		cell.addEventListener('click', function() {
			this.textContent = 'X';
		});
	}
}
function start(cells) {
	let i = 0; // начальное значение счетчика
	
	for (let cell of cells) {
		cell.addEventListener('click', function() {
			if (i % 2 == 0) {
				this.textContent = 'X';
			} else {
				this.textContent = '0';
			}
			
			i++; // увеличиваем счетчик
		});
	}
}

function init(selector) {
	let cells = document.querySelectorAll('#field td');
	let i = 0;
	
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			this.textContent = ['X', 'O'][i % 2];
			this.removeEventListener('click', step);
			
			// здесь мы должны проверять победу или ничью
			
			i++;
		});
	}
}


