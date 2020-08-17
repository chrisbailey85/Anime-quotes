const url = "https://anime-chan.herokuapp.com/api/quotes/random"
const getQuote = function(){
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let quote = {...res[0]}
        let characters = quote.anime + quote.quote + quote.character;
        if(characters.length > 267){
            console.log("too long")
            getQuote();
        } else {
        document.querySelector(".anime-title").innerText = quote.anime
        // document.querySelector("p").innerText = quote.quote
        document.querySelector("h3").innerText = quote.character
        }
    })
}

getQuote();

let box = document.querySelector(".border");
box.addEventListener("click", ()=> {
    box.classList.add("anim")
    setTimeout(function(){
        getQuote();
    }, 3000) ;
})