import { annotate } from 'https://unpkg.com/rough-notation?module';
const e = document.querySelector(".box");
const annotation = annotate(e, { type: 'box' });
annotation.color = "white";
annotation.show();
box.addEventListener("click", ()=> {
  setTimeout(() => {
      annotation.hide();
  }, 3000);  
  setTimeout(() => {
      annotation.show();
  }, 9000);  
})