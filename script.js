async function fetchCharacterName() {
    try {
      const baseUrl = 'https://www.swapi.tech/api/people/3';
      const response = await fetch(baseUrl);
      const data = await response.json();
      console.log(data.result.properties.name);
    } catch (err) {
      console.error(err);
    }
  }
  
  fetchCharacterName();