const tabs = document.querySelectorAll('.accordion__trigger')

tabs.forEach((tab) => {
  tab.addEventListener('click', toggleAccordion)
})

// # Resource
// https://accessible-components.sparkbox.com/accordion

function toggleAccordion(e) {
  let isPanelOpen = e.target.getAttribute('aria-expanded') === 'true' || false
  console.log(e.target.getAttribute('aria-expanded'))
  console.log(isPanelOpen)
  // ! e.target.getAttribute('aria-expanded') returns string, not a boolean

  /* *
   * To have a single panel open at a time, enable the
   * collapseAll method and comment out the 'else' block
   */
  // collapseAll()

  /* *
   * Adding the 'hidden' attribute to the div/panel markup
   * prevents users and screenreaders from accessing hidden
   * panels inadvertently
   */
  if (isPanelOpen) {
    e.target.setAttribute('aria-expanded', false) // btn
    e.target.parentElement.classList.add('collapsed') // h3
    e.target.parentElement.nextElementSibling.hidden = isPanelOpen // div
  } else {
    e.target.setAttribute('aria-expanded', true)
    e.target.parentElement.classList.remove('collapsed')
    e.target.parentElement.nextElementSibling.hidden = isPanelOpen
  }
}

// function collapseAll(){
//   tabs.forEach (tab => {
//     tab.parentElement.classList.add('collapsed')
//     tab.setAttribute('aria-expanded', false)
//   })
// }

// # Alternate Approach
// https://www.aditus.io/patterns/accordion/

/* 
function toggleAccordion(e){
  let target = e.target.parentElement.nextElementSibling
  let expanded = e.target.getAttribute('aria-expanded') === 'true' || false;
  e.target.setAttribute('aria-expanded', !expanded);
  target.hidden = expanded;
}
*/
