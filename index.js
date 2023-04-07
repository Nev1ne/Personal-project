const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

// Create "like" button element

const likeButton = document.createElement("button");
likeButton.classList.add("like-button");
likeButton.innerHTML = "Like";

// Append "like" button to container

container.appendChild(likeButton);

search.addEventListener("click", () =>{
     
const APIKey = "1a6b19b880a95e4b063d8300ccd84949";
const city = document.querySelector(".search-box input").value;

if (city === '')
return;

fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
    if(json.cod === '404') { 
         container.style.height = '400px';
         weatherBox.style.display = 'none';
         weatherDetails.style.display = 'none';
         error404.style.display = 'block';
         error404.classList.add('fadeIn');
         return;
    }
    error404.style.display = 'none';
    error404.classList.remove('fadeIn');

           const image = document.querySelector('.weather-box img');
           const temperature = document.querySelector('.weather-box .temperature');
           const description = document.querySelector('.weather-box .description');
           const humidity = document.querySelector('.weather-details .humidity span');
           const wind = document.querySelector('.weather-details .wind span');

           switch (json.weather[0].main){

            case "Clear":
                image.src =
                  "https://img.freepik.com/free-vector/cheerful-funny-cartoon-sun_74855-206.jpg?w=740&t=st=1680847121~exp=1680847721~hmac=785d473d3baa2312bfb2c07ff230c6399756a37395b96b45790520bcccf1e459";
                // Add "like" button functionality for sunny weather
                likeButton.style.display = "block";
                likeButton.addEventListener("click", () => {
                  // Perform action for "like" button click on sunny weather
                  console.log("Liked sunny weather!");
                });
                break;
            case 'Clear':
                  "https://img.freepik.com/free-vector/cheerful-funny-cartoon-sun_74855-206.jpg?w=740&t=st=1680847121~exp=1680847721~hmac=785d473d3baa2312bfb2c07ff230c6399756a37395b96b45790520bcccf1e459";
                  image.src = ''
                break;
            case 'Rain':
                image.src = 'https://img.freepik.com/free-vector/cloud-with-falling-rain-background_1017-32364.jpg?w=740&t=st=1680847312~exp=1680847912~hmac=60a4b711b3a7e352bca5fa25cc8f5591fef3895a4a9b99883dbf4a41ed16b4c1';
                break; 
            case 'Snow':
                image.src = 'https://img.freepik.com/free-vector/thermometer-winter-season_1308-69842.jpg?w=740&t=st=1680847915~exp=1680848515~hmac=d6ad06e0fdb53f422e57e53f9b2353cfc78b4f0328cd85c360d9283ae9a857cd';
                break;
            case "Clouds":
                image.src =
                      "https://img.freepik.com/premium-photo/abstract-image-with-cloud-like-shape-crayon-scribbled-texture-hand-drawn-crayons_448865-1233.jpg?w=996";
                    // Add "like" button functionality for cloudy weather
                    likeButton.style.display = "block";
                    likeButton.addEventListener("click", () => {
                      // Perform action for "like" button click on cloudy weather
                      console.log("Liked cloudy weather!");
                    });
                 break;    
            case 'Clouds':
                image.src = 'https://img.freepik.com/premium-photo/abstract-image-with-cloud-like-shape-crayon-scribbled-texture-hand-drawn-crayons_448865-1233.jpg?w=996';
                break;  
            
            case 'Haze':
                image.src = 'https://img.freepik.com/premium-vector/abstract-swirl-smoke-steam-isolated-blue-background_714617-175.jpg?w=996';
                break;  
            case 'Moon':
                image.src = 'https://img.freepik.com/free-vector/blue-watercolor-crescent-geometric-shape-vector_53876-164626.jpg?size=626&ext=jpg';
                break; 
            case 'Wind':
                image.src = 'https://img.freepik.com/free-vector/wind-icon-vector-renewable-energy-symbol_53876-111861.jpg?w=740&t=st=1680849140~exp=1680849740~hmac=00b7feda70484ea7a258cc3b8842b1025b576545e51c490f6071372fc1e1e580';
                break;             
                
                default:
                    image.src = '';
           }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display= '';
        weatherBox.classList.add('fadeIn');
        container.style.height = '590px';



  });


});