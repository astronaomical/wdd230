const currentWeather = document.querySelector('#currentweather');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const threedayf = document.querySelector('#threedayf');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=20e412f4d6abee8186539f166647b35a&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentWeather.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    description.innerHTML = weatherData.weather[0].description;
    humidity.innerHTML = weatherData.main.humidity
}


//Total number of Orders//
const numOfOrdersDisplay = document.querySelector('#drinksordered');
let numOrders = Number(window.localStorage.getItem("orders-ls"));

if (numOrders !== 0) {
	numOfOrdersDisplay.textContent = numOrders;
} else {
	numOfOrdersDisplay.textContent = `No orders yet`;
}

