async function generateQuote() {
  try {
    const response = await fetch('https://api.kanye.rest');
    const data = await response.json();
    return data.quote;
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

async function geneateQuotesHTML(numberOfQuotes) {
 html =  ``

 for (var i=0; i < numberOfQuotes; i++) {
    const quote = await generateQuote();
    html += `<div class="quote">"${quote}"</div>`;
 }

 document.querySelector('.js-quote').innerHTML = html;
}

document.querySelector('.js-generate-button')
.addEventListener('click', () => {
  const numberOfQuotes = parseInt(document.getElementById('number-slider').value);
  geneateQuotesHTML(numberOfQuotes);
})

document.getElementById('number-slider').addEventListener('input', (event) => {
  document.getElementById('slider-value').textContent = event.target.value; // Aktualizujemy wyświetlaną liczbę
});