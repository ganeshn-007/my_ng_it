// API endpoint requiring authentication
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=blue margarita';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
 //   return response.text();
 const headers = response.headers;
 const contentType = headers.get('Content-Type');
 console.log(`Content-Type: ${contentType}`);
 headers.forEach((Key, Value) => {
    console.log(`${Key}: ${Value}`);
  });
  })
  .catch(error => {
    console.error('Error:', error);
  });