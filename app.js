
const newQuoteButton = document.addEventListener('click', getQuote);
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
// function getQuote(){
//   console.log('was clicked');
// }

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok)
      throw Error(response.statusText)

  const json = await response.json();
  displayQuote(json.message);
  } catch(e) {
    console.log(e)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
