// API endpoint requiring authentication
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   return response.json();
  })
  .then(data => {
    const drinkType = data.drinks[0].strDrink;
    const keyIngr = data.drinks[0].strIngredient1;
    const iglass = data.drinks[0].strGlass;
 console.log(data.drinks[0].strGlass);
 console.log(`shall I get you a "${drinkType}" which is specially made with "${keyIngr}" on a "${iglass}"`);
 //if (chkCountry === "US") {
//    console.log('Welcome to USA Buddy');
//  } else {
//    console.log('Try harder or fly to EU region');
//  }
  })
  .catch(error => {
    console.error('Error:', error);
  });