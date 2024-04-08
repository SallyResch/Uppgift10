fetch("https://www.swapi.tech/api/people/?name=chewbacca")
.then(response => console.log(response))
.catch(error => console.error());