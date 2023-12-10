//NOT WORKING
///const url = 'https://api.weatherbit.io/v2.0/current&city=Raleigh,NC';
const url = 'https://api.weatherbit.io/v2.0/current&city=Raleigh,NC';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9384aa2cddf94e838c02ec4134f4617a',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};
fetch('https://api.weatherbit.io/v2.0/current&city=Raleigh,NC')           //api for the get request
    .then(response => response.json())
    .then(data => console.log(data));