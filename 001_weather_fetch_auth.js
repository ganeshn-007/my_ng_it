// API endpoint requiring authentication
const apiUrl = 'https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=9384aa2cddf94e838c02ec4134f4617a';
// API key for authentication
//const apiKey = '9384aa2cddf94e838c02ec4134f4617a';

// Make a GET request with authentication using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(protectedData => {
    // Process the protected data
 //   console.log('Protected Data:', protectedData);
 const parsedData = JSON.parse(protectedData);
 console.log(parsedData.count);
 console.log(parsedData.data.app_temp[1]);
 //console.log(protectedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });