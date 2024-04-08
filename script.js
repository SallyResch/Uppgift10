let baseUrl = 'https://www.swapi.tech/api/people/${name}';
const searchButton = document.querySelector('#searchButton');
const inputField = document.querySelector('#inputText');
const output = document.querySelector('#outputText');

const getStarwars = () =>{
  console.log('getStarwars function is called'); // Konsollogg för att kontrollera om funktionen körs
  fetch(baseUrl, {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
  })
  .then(res =>{
    if(res.ok)
      return res.json();
    throw new Error('Failed to get repos');
  })
  .then(result =>{
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

searchButton.addEventListener('click', getStarwars);



/* const btnGit = document.querySelector('#btnGit');
const gitOutput = document.querySelector('#git-output');

const getGit = () =>{
    fetch('https://api.github.com/users/Lexicon-net-2024/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok)
         return res.json();
        throw new Error('Failed to get repos');
    })
    .then(data =>{
        console.log(data);
         
        gitOutput.innerHTML = '';

        data.forEach(repo =>{
            gitOutput.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${repo.name}</h5>
                    <p class="card-text">This repo is mainly written in ${repo.language}</p>
                    <p class="card-text">This repo have been forked ${repo.forks_count} times </p>
                    <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                    <a href="${repo.owner.html_url}" class="card-link">Owner</a>
                </div>
            </div>
            `
        })
    })
    .catch(err => console.log('Error: '+ err));
}

btnGit.addEventListener('click', getGit);  */