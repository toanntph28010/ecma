var h1 = document.querySelector('h1')
var text = "cao dang fpt poly"
if (text.length>12) {
    var button = document.querySelector('button')
    button.onclick = function() {
    h1.innerHTML= text + " " +text.length
    h1.style.color = "red"
    h1.style.textAlign = "center"
    h1.style.textTransform= "capitalize"
} 
} else {
    var button = document.querySelector('button')
    button.onclick = function() {
    h1.innerHTML= "cao đang ..."
    h1.style.color = "red"
    h1.style.textAlign = "center"
    h1.style.textTransform= "capitalize"
} 
}

