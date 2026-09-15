import frame1 from "./images/Frame 9.png"
import frame2 from "./images/Frame 10.png"
import frame3 from "./images/Frame 11.png"
import frame4 from "./images/Frame 12.png"
import frame5 from "./images/Frame 13.png"
import frame6 from "./images/Frame 14.png"
import frame7 from "./images/Frame 15.png"
import frame8 from "./images/Frame 16.png"

function displayMenu() {
    const homeButton = document.querySelector("button.Home")
    const menuButton = document.querySelector("button.Menu")
    const aboutButton = document.querySelector("button.About")
    const content = document.querySelector("#content")
    const menuDiv = document.createElement("div")
    const menuItems = document.createElement("div")
    const bigText = document.createElement("h2")
    const _frame1 = document.createElement("img")
    const _frame2 = document.createElement("img")
    const _frame3 = document.createElement("img")
    const _frame4 = document.createElement("img")
    const _frame5 = document.createElement("img")
    const _frame6 = document.createElement("img")
    const _frame7 = document.createElement("img")
    const _frame8 = document.createElement("img")
    menuDiv.classList.add("menu")
    menuItems.classList.add("menu-items")
    _frame1.src = frame1
    _frame2.src = frame2
    _frame3.src = frame3
    _frame4.src = frame4
    _frame5.src = frame5
    _frame6.src = frame6
    _frame7.src = frame7
    _frame8.src = frame8
    bigText.textContent = "MENU"
    menuItems.append(_frame1,_frame2,_frame3,_frame4,_frame5,_frame6,_frame7,_frame8)

    menuDiv.append(bigText,menuItems)
    content.append(menuDiv)
    menuButton.classList.add("active")
    homeButton.classList.remove("active")
    aboutButton.classList.remove("active")
}

export default displayMenu