import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
const border = annotate(document.querySelector(".box"), { type: 'box' } );
const getNewQuote = document.querySelector(".button");
const buttonBorder = annotate(document.querySelector(".button"), { type: 'box', padding: [8, 8] } );
const twitter = annotate(document.querySelector(".twitter-share-button"), { type: 'box', padding: [8, 8]  } )
border.color = "white";
const ag = annotationGroup([border, twitter]);
buttonBorder.show();
ag.show()
getNewQuote.addEventListener("click", ()=> {
  setTimeout(() => {
      ag.hide();
  }, 3000);  
  setTimeout(() => {
      ag.show();
  }, 6000);  
})