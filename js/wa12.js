document.addEventListener('DOMContentLoaded', function () {
    const newBtn = document.querySelector('#js-new-quote');
    const tweetBtn = document.querySelector('#js-tweet');
    let jokeTxt = document.querySelector('#js-quote-text');
    let answerTxt = document.querySelector('#js-answer-text');
    const endpoint = 'https://api.chucknorris.io/jokes/random';

    async function getJoke() {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json);
            displayJoke(json['value']);
        } catch (err) {
            console.log(err);
            alert('Failed to fetch a new joke');
        }
    }

    function displayJoke(jokeText) {
        jokeTxt.textContent = jokeText;
        answerTxt.textContent = ''; // Clear the answer text
    }

    function toggleContent() {
        if (answerTxt.textContent === '') {
            answerTxt.textContent = 'Chuck Norris counted to infinity. Twice.';
        } else {
            answerTxt.textContent = '';
        }
    }

    window.tweetJoke = function () {
        const joke = jokeTxt.textContent;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(joke)}`;
        window.open(tweetUrl, '_blank');
    };

    newBtn.addEventListener('click', getJoke);
    getJoke(); // Fetch and display a joke on page load
});
