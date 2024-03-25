fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
    .then(response => console.log(response))
    .catch(error => console.error(error))