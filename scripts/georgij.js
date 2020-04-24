let myButton = document.getElementById("button")
//localStorage.setItem("counter", 0)
//console.log(localStorage.getItem(counter))

if (!localStorage.getItem("counter")) {
    localStorage.setItem("counter", 0)
    myButton.innerHTML = "0"
}else{
    myButton.innerHTML = parseInt(localStorage.getItem("counter"))
}

myButton.onclick = function() {
    let counter = parseInt(localStorage.getItem("counter")) + 1
    console.log("Number = " + counter)
    localStorage.setItem("counter", counter)
    myButton.innerHTML=localStorage.getItem("counter")

}