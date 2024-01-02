        const apikey = "f75bf648dc987bfa00ff6274dfd489bb";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
        
        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        async function checkweather(city){
            const response = await fetch(`${apiurl}&q=${city}&appid=${apikey}`);
            var data = await response.json();

            console.log(data);
            document.querySelector(".cityname").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
            document.querySelector(".humi").innerHTML = Math.round(data.main.humidity) + "%";
        }
        searchbtn.addEventListener("click", ()=>{
            checkweather(searchbox.value);
        })
        