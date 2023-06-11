

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a483d53467msh08c0908dd20e8afp1f11c6jsn837249b2d3e9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather=(city)=>{
    
	cityname.innerHTML=city
	const response =  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		
		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML =response.humidity
		min_temp.innerHTML=response.min_temp 
		max_temp.innerHTML =response.max_temp 
		wind_speed.innerHTML=response.wind_speed 
		wind_degrees.innerHTML =response.wind_degrees 
		sunrise.innerHTML =response.sunrise
		sunset.innerHTML =response.sunset
	}
	
	).catch(err=>console.log(err));
}
const a=document.getElementById("submit");
a.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})
getweather("Delhi");