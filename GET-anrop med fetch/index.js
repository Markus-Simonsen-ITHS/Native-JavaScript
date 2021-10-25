fetch(`https://avancera.app/cities/?name=${prompt()}&minPopulation=${prompt()}`)
    .then(response => response.json())
    .then(cities => {
        console.log(cities)
    });