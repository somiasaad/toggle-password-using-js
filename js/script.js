//  setup varible
var input = document.getElementById("myinput")
var button = document.getElementById("btn")
    //event 

button.addEventListener('click', togglepassword)
    // function


function togglepassword() {
    // console.log(button.innerHTML)
    if (button.getAttribute('data-text') == "show") {
        input.setAttribute('type', 'text')
        button.setAttribute('data-text', 'hiden')
        button.innerHTML = "Hiden"
    } else {
        input.setAttribute('type', 'password')
        button.setAttribute('data-text', 'show')
        button.innerHTML = "show"
    }

}