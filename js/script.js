/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotes = [
  {
    quote: "Shaken, not stirred",
    source: "James Bond",
    citation: "Goldfinger",
    year: 1996
  },
  {
    quote: "Mrs. Robinson, you're trying to seduce me, aren't you?",
    source: "Ben Braddock",
    citation: "Mike Nichols",
    year: 2001
  },
  {
    quote: "Here's Johnny!",
    source: "Jack Torrance",
    citation: "The Shining",
    year: 1980
  },
  {
    quote: "To infinity and beyond!",
    source: "Buzz Lightyear",
    citation: "Toy Story",
    year: 2001
  },
  {
    quote: "Why so serious?",
    source: "The Joker",
    citation: "Batman, The Dark Knight",
    year: 2010
  },
];

function getRandomQuote(array) {
  const randomNumber = Math.floor(Math.random() * array.length)
  const Quote = array[randomNumber];
  return Quote;
}

function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`
    if (randomQuote.citation != '') {
      html += `<span class="citation">${randomQuote.citation}</span>`
      }
    if (randomQuote.year != '') {
      html += `<span class="year">${randomQuote.year}</span>`
      }
      html += `</p>`;
    
    document.getElementById('quote-box').innerHTML = html;
}
    
document.getElementById('load-quote').addEventListener("click", printQuote, false);