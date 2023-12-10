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
    const chkType = data.drinks[0].strAlcoholic;

 console.log(data.drinks[0].strAlcoholic);
 console.log(`shall I get you a "${drinkType}" which is specially made with "${keyIngr}" on a "${iglass}"...`);
 if (chkType.toLowerCase() === 'alcoholic') {
    console.log('Your drink is ${chkType} so kindly drink responsibly');
  } else if (chkType.toLowerCase() === 'non alcoholic') {
    console.log('This drink is Non-Alcoholic, so go ga ga ga.');
  } else {
    console.log('Alcoholic status is unknown.');
  }
// if (chkType === "Alcoholic") {
//    console.log('Your drink is "${chkType}" so drink responsibly');
//  } else {
//    console.log('Your drink is "${chkType}" so go ga ga ga');
//  }
  })
  .catch(error => {
    console.error('Error:', error);
  });