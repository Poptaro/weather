function getWeatherData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.weather.gov/gridpoints/TOP/40,40/forecast')
        .then(response => response.json())
        .then(data => resolve(data.properties.periods))
        .catch(err => console.log(`ERROR OCCURRED: ${err}`))
        
    })
}

function displayWeather(weather) {
    console.log(weather);
}
function displayError(error) {
    return(error);
}



document.addEventListener('DOMContentLoaded', () => {
    
    let temp = null;
    const boxOne = document.querySelector("#dayOne");
    const boxTwo = document.querySelector("#dayTwo");
    const boxThree = document.querySelector("#dayThree");
    const boxFour = document.querySelector("#dayFour");
    const boxFive = document.querySelector("#dayFive");
    const boxSix = document.querySelector("#daySix");
    const boxSeven = document.querySelector("#daySeven");


    
    

        getWeatherData()
        .then( (data) => {
            for(let i = 0; i < 7; i++){

            if( i == 0){
                temp = boxOne;
            } else if ( i == 1){
                temp = boxTwo;
            } else if ( i == 2){
                temp = boxThree;
            } else if ( i == 3){
                temp = boxFour;
            } else if ( i == 4){
                temp = boxFive;
            } else if ( i == 5){
                temp = boxSix;
            } else if ( i == 6){
                temp = boxSeven;
            }
            temp.insertAdjacentHTML(
                "beforeend",
                `
                <p class="day">${data[i].name}</p>
                <p class="forecast">${data[i].shortForecast}</p>
                `
            )
            }
        })
        .catch(err => {console.log(`Error Occurred: ${err}`)})


})
