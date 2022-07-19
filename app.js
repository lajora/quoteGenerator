const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const spinner = document.querySelector('#js-spinner');

async function getQuote() {
  spinner.classList.remove('hidden');
  newQuoteButton.disabled = true;

  try {
    const response = await fetch(endpoint);
    if (!response.ok)
    throw Error(response.statusText)

    const json = await response.json();
    displayQuote(json.message);
  } catch(e) {
    alert('Failed');
  } finally {
    newQuoteButton.disabled = false;
    spinner.classList.add('hidden');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
