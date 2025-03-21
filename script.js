const quoteText = document.getElementById('text');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  quoteText.textContent = `"${data.content}"`;
  authorText.textContent = `— ${data.author}`;
}

newQuoteBtn.addEventListener('click', getQuote);

// Load a quote on start
getQuote();
