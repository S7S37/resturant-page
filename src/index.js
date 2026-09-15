import "./stylesheet.css"
import displayHome from "./home.js"
import displayMenu from "./menu.js"
import displayAbout from "./about.js"

function addEventListener (){
    displayHome()
    function resetContent(){
        document.querySelector("#content").textContent = ""
    }
    document.querySelector(".Home").addEventListener("click",() =>{ 
        resetContent()
        displayHome()})
    document.querySelector(".Menu").addEventListener("click",() =>{ 
        resetContent() 
        displayMenu()})
    document.querySelector(".About").addEventListener("click",() =>{ 
        resetContent() 
        displayAbout()})
}

addEventListener()