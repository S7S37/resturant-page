import burgerImage from "./images/Default_burger_cinematic_and_of_different_types_flying_burger_1-removebg-preview 1.png"

function displayAbout() {
    const homeButton = document.querySelector("button.Home")
    const menuButton = document.querySelector("button.Menu")
    const aboutButton = document.querySelector("button.About")
    const content = document.querySelector("#content")
    const image = document.createElement("img")
    const aboutDiv = document.createElement("div")
    const aboutContainer = document.createElement("div")
    const textContainer = document.createElement("div")
    const heading2 = document.createElement("h2")
    const heading3 = document.createElement("h3")
    const paragraph = document.createElement("p")

    aboutDiv.classList.add("about")
    aboutContainer.classList.add("about-container")
    textContainer.classList.add("text-container")
    heading2.textContent = "About us"
    heading3.textContent = "We don't do average."
    paragraph.innerHTML = "Burger was born in a cramped<br> kitchen with one griddle, two folding<br> tables, and an obsession with getting the burger exactly right. Fifteen years later, that obsession<br> hasn't changed — only the queue has gotten longer."
    image.src = burgerImage

    textContainer.append(heading3,paragraph,)
    aboutContainer.append(image,textContainer)
    aboutDiv.append(heading2,aboutContainer)
    content.appendChild(aboutDiv)



    aboutButton.classList.add("active")
    menuButton.classList.remove("active")
    homeButton.classList.remove("active")
}

export default displayAbout