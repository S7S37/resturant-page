import burgerImage from "./images/Default_burger_cinematic_and_of_different_types_flying_burger_1-removebg-preview 1.png"
import frame1 from "./images/Frame 5.png"
import frame2 from "./images/Frame 6.png"
import frame3 from "./images/Frame 7.png"
import frame4 from "./images/Frame 8.png"




const content = document.querySelector("#content")

function displayHome(){
    const homeButton = document.querySelector("button.Home")
    const menuButton = document.querySelector("button.Menu")
    const aboutButton = document.querySelector("button.About")
    const home = document.createElement("div")
    const leftSide = document.createElement("div")
    const rightSide = document.createElement("div")
    const contentBottomImages = document.createElement("div")
    const hero = document.createElement("div")
    const heroH3 = document.createElement("h3")
    const heroH2 = document.createElement("h2")
    const heroH4 = document.createElement("h4")
    const _frame1 = document.createElement("img")
    const _frame2 = document.createElement("img")
    const _frame3 = document.createElement("img")
    const _frame4 = document.createElement("img")
    const _heroImage = document.createElement("img")
    //right side 
    _heroImage.src = burgerImage
    rightSide.appendChild(_heroImage)
    _frame1.src = frame1
    _frame2.src = frame2
    _frame3.src = frame3
    _frame4.src = frame4
    home.classList.add("home")
    leftSide.classList.add("content-left-side")
    rightSide.classList.add("content-right-side")
    hero.classList.add("home-hero")
    contentBottomImages.classList.add("content-bottom-imgs")
    heroH3.textContent = "THE ULTIMATE"
    heroH2.textContent = 'Burger Club'
    heroH4.textContent = 'Savor the Flavor, Join the Club!'
    contentBottomImages.append(_frame1,_frame2,_frame3,_frame4)
    hero.append(heroH3,heroH2,heroH4)
    leftSide.append(hero,contentBottomImages)
    home.append(leftSide,rightSide)
    content.append(home)
    homeButton.classList.add("active")
    menuButton.classList.remove("active")
    aboutButton.classList.remove("active")
    
}
export default displayHome

