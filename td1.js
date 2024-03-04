function afficheVille() {
    let nomVilleChoisie = document.getElementById('villesChoix').value;
    let villes = document.getElementsByClassName('city');
	for (let i = 0; i < villes.length; i++) {
        if (nomVilleChoisie === '' || villes[i].id === nomVilleChoisie) {
            villes[i].style.display = '';
        } else {
            villes[i].style.display = 'none';
        }
    }

    if (nomVilleChoisie !== '') {
        getWeather(nomVilleChoisie);
    }
}


function getWeather(city) {
    const countryCode = ""; 
    const apiKey = 'eccf8200898239c01b81626293da9f1d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&lang=fr&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        const weatherHtml = `
            <div class="city">
                <h2>${cityName}</h2>
                <p>${temperature}°C, ${description}</p>
                <img src="${iconUrl}" alt="Icône météo">
            </div>
        `;

        document.getElementById('weatherInfo').innerHTML = weatherHtml;
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données météorologiques:', error);
    });
}

afficheVille();
