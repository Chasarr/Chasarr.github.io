let myImage = document.querySelector("img")
let myHeading = document.querySelector("h1")
let myButton = document.querySelector("button")
const insultQuestions = ["Write yo name ya doofus", "Your name. Hand it over", "GE MIG NAMNET SKIT I PRIVACY", "Please gib name YOU IDOET!!1!!1",
    "Hello it is I, the president of USA of america, Donald Trump. HAND OVER USERNAME OR I'LL SWAT YOU", "Give your name or I'll murder your entire family"]
myButton.setAttribute("hello")
if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = "Välkommen tillbaks, " + storedName
}


let start = new Audio("/sounds/start.mp3")
let end = new Audio("/sounds/end.mp3")
myImage.onmouseenter = function () {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "/images/graphicz.jpg") {
        myImage.setAttribute("src", "/images/graphicz-angry.jpg")
    }
}
myImage.onmouseleave = function () {
    myImage.setAttribute("src", "/images/graphicz.jpg")
    end.pause()
}

myImage.onclick = function () {
    myImage.setAttribute("src", "/images/graphicz-deepfried.jpg")
    console.log("lol")
    end.play()
}
console.log(myButton)


myButton.onclick = function () {
    setUserName()
}


function setUserName() {
    let myName = ""
    let idiot = false
    let promptText = "Please enter your name"
    do {
        if(idiot){
            promptText = insultQuestions[getRandomInt(insultQuestions.length)]
        }
        myName = prompt(promptText)
        idiot = true
    } while (!myName)
    localStorage.setItem("name", myName)
    myHeading.textContent = "Välkommen, " + myName

}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

