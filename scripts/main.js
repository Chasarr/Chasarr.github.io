let myImage = document.querySelector("img")
let i = 0
let sound = new Audio("sounds/touch.mp3")
myImage.onmouseenter = function () {
    console.log("hello: " + i++)
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/graphicz.jpg") {
        myImage.setAttribute("src", "images/graphicz-angry.jpg")
    }
}

myImage.onmouseleave = function () {
    myImage.setAttribute("src", "images/graphicz.jpg")
}

myImage.onclick = function () {
    myImage.setAttribute("src", "images/graphicz-deepfried.jpg")
    sound.play("touch.mp3")
}