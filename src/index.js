import "./stylesheet.css"
import displayHome from "./home.js"
import displayMenu from "./menu.js"
import displayAbout from "./about.js"

function addEventListener (){
    document.querySelector(".Home").addEventListener("click", displayHome)
    document.querySelector(".Menu").addEventListener("click", displayHome)
    document.querySelector(".About").addEventListener("click", displayHome)
}

addEventListener()