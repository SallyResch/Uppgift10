let baseUrl = 'https://www.swapi.tech/api/people/1/'
let person = document.getElementById('outputText')
fetch(baseUrl)
.then(res => res.json())
  .then(json => {
    console.log(json.result.properties.name)
    person.innerHTML=`${json.result.properties.name}`
  })