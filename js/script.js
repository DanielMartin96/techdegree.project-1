/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

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

/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomQuote = array[randomNumber].quote;
  return randomQuote;
}

const letRandomQuote = getRandomQuote(quotes);
  let html = `<p class="quotes">${letRandomQuote}</p><p class="source">${letRandomQuote.source}</p>`;
  document.getElementById('quote-box').innerHTML = html;

  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  // 3. Return the variable storing the random quote object

/***
 * `printQuote` function
***/

  // 1. Create a variable that calls the getRandomQuote() 
  // function

function printQuote() {

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  const letRandomQuote = getRandomQuote(quotes);
  let html = `<p class="quotes">${letRandomQuote}</p><p class="source">${letRandomQuote.source}</p>`;

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  document.getElementById('quote-box').innerHTML = html;

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
