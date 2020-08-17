import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
const border = annotate(document.querySelector(".box"), { type: 'box' } );
const getNewQuote = document.querySelector("button");
const twitter = annotate(document.querySelector(".twitter-share-button"), { type: 'circle', padding: [8, 15] } )
border.color = "white";
const ag = annotationGroup([border, twitter]);
ag.show()
getNewQuote.addEventListener("click", ()=> {
  setTimeout(() => {
      ag.hide();
  }, 3000);  
  setTimeout(() => {
      ag.show();
  }, 6000);  
})