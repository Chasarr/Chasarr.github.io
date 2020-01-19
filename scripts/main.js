let myImage = document.querySelector("img")
let myHeading = document.querySelector("h1")
let myButton = document.querySelector("button")

console.log(myHeading)
if(!localStorage.getItem("name")){
    setUserName()
}else{
    let storedName = localStorage.getItem("name")
    myHeading.textContent = "Välkommen tillbaks, " + storedName
}









let start = new Audio("sounds/start.mp3")
let end = new Audio("sounds/end.mp3")
myImage.onmouseenter = function () {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/graphicz.jpg") {
        myImage.setAttribute("src", "images/graphicz-angry.jpg")
    }
}
myImage.onmouseleave = function () {
    myImage.setAttribute("src", "images/graphicz.jpg")
    end.pause()
}

myImage.onclick = function () {
    myImage.setAttribute("src", "images/graphicz-deepfried.jpg")
    end.play()
}
console.log(myButton)


myButton.onclick = function () {
    setUserName()
}


function setUserName() {
    let myName = prompt("Please enter your name.")
    localStorage.setItem("name", myName)
    console.log("changing name to " + myName)
    myHeading.textContent = "Välkommen, " + myName
}


