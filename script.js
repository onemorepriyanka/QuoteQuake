fetch('https://api.quotable.io/random')
.then(data => data.json())
.then(quoteData =>{
    const quote = quoteData.content;
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quote;
} )