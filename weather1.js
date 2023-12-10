//NOT WORKING
const url = 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=9384aa2cddf94e838c02ec4134f4617a&include=minutely';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9384aa2cddf94e838c02ec4134f4617a',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}