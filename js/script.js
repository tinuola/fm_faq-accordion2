const tabs = document.querySelectorAll('.accordion__trigger')


tabs.forEach( tab => {
  tab.addEventListener('click', toggleAccordion)
})


// # Model
// Source: https://accessible-components.sparkbox.com/accordion

function toggleAccordion(e){

  let isPanelOpen = e.target.getAttribute('aria-expanded') === 
  'true' || false;
  // ! e.target.getAttribute('aria-expanded') returns string, not a boolean

  /* * 
  * To have single panel open at a time, use
  * collapseAll method and comment out `else` block
  */

  // collapseAll()

  if(isPanelOpen){
    e.target.setAttribute('aria-expanded', false)
    e.target.parentElement.classList.add('collapsed')
  } else {
    e.target.setAttribute('aria-expanded', true)
    e.target.parentElement.classList.remove('collapsed')
  } 
}


// function collapseAll(){
//   tabs.forEach (tab => {
//     tab.parentElement.classList.add('collapsed')
//     tab.setAttribute('aria-expanded', false)
//   })
// }



// # Alternate Approach
// Source: https://www.aditus.io/patterns/accordion/

/* 
function toggleAccordion(e){
  let target = e.target.parentElement.nextElementSibling
  let expanded = e.target.getAttribute('aria-expanded') === 'true' || false;
  e.target.setAttribute('aria-expanded', !expanded);
  target.hidden = expanded;
}
*/