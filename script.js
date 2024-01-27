const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9021aeaa2emsh8946d80e32a1c3cp153e9ejsn9909d5283e5f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city 

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {


            console.log(response)
          
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset





        })
        .catch(err => console.error(err));

} 



function myFunction() {
    location.replace("https://en.wikipedia.org/wiki/List_of_countries_and_territories_by_extreme_temperatures")
  }
function myFunction2() {
    location.replace("http://data.un.org/Data.aspx?d=CLINO&f=ElementCode%3A11")
  }
function myFunction3() {
    location.replace("https://climate.nasa.gov/vital-signs/global-temperature/")
  }
function myFunction4() {
    location.replace("https://www.google.com/search?q=delhi+weather&rlz=1C1RXQR_enIN1024IN1024&oq=delhi+weather+&aqs=chrome..69i57j0i131i433i512l3j0i20i263i512j0i131i433i512j0i512j0i433i512j0i131i433i512j0i512.4940j1j15&sourceid=chrome&ie=UTF-8")
  }
function myFunction5() {
    location.replace("https://www.google.com/search?q=kolkata+weather&rlz=1C1RXQR_enIN1024IN1024&oq=kolkata+&aqs=chrome.1.69i57j0i131i433i512j46i199i433i465i512j0i433i512j0i512l2j46i131i199i433i465i512j0i512l2j0i433i512.3624j0j15&sourceid=chrome&ie=UTF-8")
  }
function myFunction6() {
    location.replace("https://www.google.com/search?q=chennai+weather&rlz=1C1RXQR_enIN1024IN1024&sxsrf=ALiCzsYIxZWjkH_o-KtrcOxGgSnybjku9A%3A1672564287327&ei=P06xY8nDE4Xm4-EP8I2WiAw&oq=chennai&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgwIABCxAxBDEEYQgAIyDQgAEIAEEIcCELEDEBQyBwgAELEDEEMyBAgAEEMyCwguEIAEELEDEIMBMggILhCABBCxAzIFCAAQsQMyBAgAEEMyBAgAEEMyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOgcIIxDqAhAnOg0ILhDHARCvARDqAhAnOgwIABDqAhC0AhBDGAE6BAgjECc6CAgAEIAEELEDOgoILhCxAxCDARBDOgcILhCxAxBDOg0ILhCxAxDHARCvARBDSgQIQRgASgQIRhgBUPYEWL8kYLAvaAJwAXgEgAHOAYgBzg-SAQYwLjEwLjGYAQCgAQGwARTIAQrAAQHaAQYIARABGAE&sclient=gws-wiz-serp")
  }
function myFunction7() {
    location.replace("https://www.google.com/search?q=bangalore+weather&rlz=1C1RXQR_enIN1024IN1024&sxsrf=ALiCzsZgI57xPAcusTIdLspwQJh2HI5hzg%3A1672564737160&ei=AVCxY-CoCeiXz7sPmb-_sAg&oq=ban&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgcIABCxAxBDMgQIABBDMgQIABBDMgoIABCxAxCDARBDMgcILhCxAxBDMgQIABBDMgQIABBDMgQIABBDMggIABCABBCxAzIKCAAQsQMQgwEQQzoHCAAQsAMQQzoKCAAQsQMQsAMQQzoSCC4QxwEQ0QMQyAMQsAMQQxgBOgwILhDIAxCwAxBDGAE6EgguEMcBEK8BEMgDELADEEMYAToHCCMQ6gIQJzoNCC4QxwEQrwEQ6gIQJzoMCAAQ6gIQtAIQQxgCOgQIIxAnOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6CAgAELEDEIMBOgUIABCRAjoLCC4QsQMQ1AIQkQI6EAguEMcBENQCELEDENEDEEM6CgguENQCELEDEEM6CgguELEDENQCEENKBAhBGAFKBAhGGAFQxghYhStg0z9oA3AAeASAAZoCiAG4C5IBBTAuNy4xmAEAoAEBsAEUyAENwAEB2gEECAEYCNoBBggCEAEYAQ&sclient=gws-wiz-serp")
  }


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    // e.preventdeafault we basically used for not reloadding a site again and again
    getWeather(city.value)
})


getWeather("Kolkata")

