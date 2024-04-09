document.addEventListener('DOMContentLoaded', function() {
  const baseUrl = 'https://www.swapi.tech/api/people/';

  const searchButton = document.querySelector('#searchButton');
  const inputText = document.querySelector('#inputText');
  const outputText = document.querySelector('#outputText');
  
  const getStarwars = () => {
    const name = inputText.value.trim(); // Hämta värdet från input-fältet och ta bort eventuella extra blanksteg
    const url = `${baseUrl}?name=${name}`; // Bygg den kompletta URL:en med namnet
  
    console.log('getStarwars function is called with name:', name);
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => {
      if (res.ok)
        return res.json();
      throw new Error('Failed to get person');
    })
    .then(data => {
      console.log(data);
      // Uppdatera output med resultatet
      const result = data.result[0];
      outputText.textContent = `
      Name: ${result.properties.name},
      Mass: ${result.properties.mass},
      Gender: ${result.properties.gender},
      Height: ${result.properties.height},
      Hair Color: ${result.properties.hair_color}`
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  searchButton.addEventListener('click', getStarwars);
  
});
