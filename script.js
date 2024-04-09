document.addEventListener('DOMContentLoaded',function(){
  const baseUrl='https://deckofcardsapi.com/api/deck/new/draw/?count=1';
  const showButton = document.querySelector('#showButton');
  const cardDiv = document.querySelector('#cardDiv');

  const getCard =()=>{
    fetch(baseUrl,{
      method: 'GET',
      headers: {
        'Accept': 'image/*'
      }
    })
    .then(res => {
      if (res.ok) 
        return res.blob();
      throw new Error('Failed to get card');
    })
    .then(blob=>{
      var imageUrlObject = URL.createObjectURL(blob);
      var imageElement = document.createElement('img');
      imageElement.src=imageUrlObject;
      document.body.appendChild(imageElement);
    })
    .catch(error => {
      console.error('Det uppstod ett fel:', error);
  })}
  showButton.addEventListener('click', getCard);
})