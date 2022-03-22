import { renderTemplate, setActive, showPage } from "./utils.js"
import { setupP2Handlers } from "./js-for-pages/page2.js"
import { setUpPage3Handlers, getAllUsers } from "./js-for-pages/page3.js"




function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id;
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "about": {
      break
    }
    case "show-cars": {
      break
    }
    case "add-edit-cars": {
      break
    }
    case "sign-up": {
      break
    }
    case "login": {
      break
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("about") //Set the default page to render




