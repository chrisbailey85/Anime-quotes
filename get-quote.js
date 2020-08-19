const url = "https://anime-chan.herokuapp.com/api/quotes/random"
const getQuote = function () {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let quote = { ...res[0] }
            let characters = quote.anime + quote.quote + quote.character;
            if (characters.length > 267) {
                console.log("too long")
                getQuote();
            } else {
                document.querySelector(".anime-title").innerText = quote.anime;
                document.querySelector(".qoute").innerText = '"' + quote.quote + '"';
                document.querySelector("h3").innerText = "-" + quote.character;
            }
            const tweet = quote.anime + " " + '"' + quote.quote + '" ' + quote.character
            document.querySelector(".twitter-share-button").setAttribute("href", "https://twitter.com/intent/tweet?hashtags=animequotes&text=" + encodeURIComponent(tweet))
        })

}




getQuote();
const box = document.querySelector(".border")
const getNewQuote = document.querySelector(".button");
getNewQuote.addEventListener("click", () => {
    box.classList.add("anim")
    setTimeout(function () {
        getQuote();
    }, 3000);
    setTimeout(function () {
        box.classList.remove("anim")
    }, 6001);
})