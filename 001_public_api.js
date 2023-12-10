const url = 'https://api.apis.guru/v2/specs/apis.guru/graph/2.1.0.json';

fetch(url)
.then((response) => response.json())
.then((json) => console.log(json));