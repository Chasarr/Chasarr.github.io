let myImage = document.querySelector("img")
let i = 0
let start = new Audio("sounds/start.mp3")
let end = new Audio("sounds/end.mp3")
myImage.onmouseenter = function () {
    console.log("hello: " + i++)
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