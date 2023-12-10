// API endpoint requiring authentication
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=blue margarita';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(protectedData => {
    // Process the protected data
    const parsedData = JSON.parse(protectedData);
    console.log(parsedData.drinks[0].strDrink);
    console.log(parsedData.drinks[0].strGlass); 
 })
  .catch(error => {
    console.error('Error:', error);
  });