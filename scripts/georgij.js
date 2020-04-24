let g_button = document.getElementById("g_button")
let k_button = document.getElementById("k_button")
//localStorage.setItem("counter", 0)
//console.log(localStorage.getItem(counter))



if (!localStorage.getItem("georgij_counter")) {
    localStorage.setItem("georgij_counter", 0)
    g_button.innerHTML = "0"
}else{
    g_button.innerHTML = parseInt(localStorage.getItem("georgij_counter"))
}

if (!localStorage.getItem("kaiwen_counter")) {
    localStorage.setItem("kaiwen_counter", 0)
    k_button.innerHTML = "0"
}else{
    k_button.innerHTML = parseInt(localStorage.getItem("kaiwen_counter"))
}


g_button.onclick = function() {
    let counter = parseInt(localStorage.getItem("georgij_counter")) + 1
    console.log("Number = " + counter)
    localStorage.setItem("georgij_counter", counter)
    g_button.innerHTML = localStorage.getItem("georgij_counter")
}

k_button.onclick = function() {
    let counter = parseInt(localStorage.getItem("kaiwen_counter")) + 1
    console.log("Number = " + counter)
    localStorage.setItem("kaiwen_counter", counter)
    k_button.innerHTML = localStorage.getItem("kaiwen_counter")

}

