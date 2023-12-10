const apiUrl = 'https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=9384aa2cddf94e838c02ec4134f4617a';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(protectedData => {
 const parsedData = JSON.parse(protectedData);
 console.log(parsedData.count);
 console.log(parsedData.data[0].city_name);
console.log(parsedData.data[0].country_code)
const chkCountry=parsedData.data[0].country_code;
if (chkCountry === "US") {
    console.log('Welcome to USA Buddy');
  } else {
    console.log('Try harder or fly to EU region');

   }
  })
