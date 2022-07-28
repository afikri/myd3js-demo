const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

document.addEventListener("DOMContentLoaded", function (event) {
    fetch(api)
    .then(function (response) { 
        return response.json(); 
    })
    .then(function (data) {
        const parsedData = parsedData(data);
    })
});

