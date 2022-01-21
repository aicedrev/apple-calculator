// DOM Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const displayEl = document.querySelector('.display');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const MultiplicationEl = document.querySelector('.Multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');


const decimalEl = document.querySelector('.decimal');
const additionEl = document.querySelector('.equal');
const equalEl = document.querySelector('.equal');
const equalEl = document.querySelector('.equal');
const equalEl = document.querySelector('.equal');
const equalEl = document.querySelector('.equal');
const equalEl = document.querySelector('.equal');
const equalEl = document.querySelector('.equal');
const equalEl = document.querySelector('.equal');



// Set up the time
const updateTime = () => {
	const currentTime = new Date();

	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();

	if (currentHour > 12) {
		currentHour -= 12;
	}

	hourEl.textContent = currentHour.toString();
	minuteEl.textContent = currentMinute.toString().padStart(2, '0');
}

setInterval(updateTime, 1000);
updateTime();