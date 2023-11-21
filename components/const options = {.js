const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b86b4a1c60msh15aa7380a612681p1990bejsn385e63344ab6',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));