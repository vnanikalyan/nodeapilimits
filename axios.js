const axios = require('axios');


for(let i=0; i<5; i++) {
    console.log('Request no - ', i , ' is fired!');
    axios.get('http://localhost:4000/one')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {    
        console.log(error);
    });
}