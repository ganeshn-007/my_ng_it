const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Access the type of the drink (assuming it's in strDrinkType property)
    const drinkType = data.drinks[0].strDrink;

    // Print the type of the drink
    console.log(`Your drink for the day is ${drinkType}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
