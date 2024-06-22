const aboutButton = document.querySelector(".aboutList")
const closeAbout = document.querySelector(".closePopUp1")
const aboutPopUp = document.querySelector(".popUp1")

aboutButton.addEventListener("click", function() {
    aboutPopUp.classList.toggle("visible")
})

closeAbout.addEventListener("click", function() {
    aboutPopUp.classList.toggle("visible")
})