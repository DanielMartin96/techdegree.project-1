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
  let fullArray = [];
  const randomNumber = Math.floor(Math.random() * array.length);
  fullArray.push(array[randomNumber].quote);
  fullArray.push(array[randomNumber].source);
  fullArray.push(array[randomNumber].citation);
  fullArray.push(array[randomNumber].year);
  return fullArray;
}

fullFullArray = getRandomQuote(quotes);
const quote = fullFullArray[0];
const source = fullFullArray[1];
const citation = fullFullArray[2];
const year = fullFullArray[3];

function printQuote() {

fullFullArray = getRandomQuote(quotes);
const quote = fullFullArray[0];
const source = fullFullArray[1];
const citation = fullFullArray[2];
const year = fullFullArray[3];

let html = `<p class="quotes">${quote}</p><p class="source">${source}`
  if (citation != '') {
    html += `<span class="citation">${citation}</span>`
  }
  if (year != '') {
    html += `<span class="year">${year}</span>`
  }
  html += `</p>`;

document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);
