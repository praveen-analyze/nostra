
var form = document.getElementById("contactForm")

form.addEventListener("submit", function(event){

event.preventDefault()

var name = document.getElementById("name").value.trim()
var age = document.getElementById("age").value.trim()
var message = document.getElementById("message").value.trim()

var nameError = document.getElementById("nameError")
var ageError = document.getElementById("ageError")
var messageError = document.getElementById("messageError")

nameError.textContent = ""
ageError.textContent = ""
messageError.textContent = ""

var isValid = true

if(name === ""){
nameError.textContent = "Name is required"
isValid = false
}

if(age === "" || isNaN(age)){
ageError.textContent = "Enter a valid age"
isValid = false
}

if(message === ""){
messageError.textContent = "Message cannot be empty"
isValid = false
}

if(isValid){
alert("Form submitted successfully!")
form.reset()
}

})

var closeNav = document.getElementById("closeNav")
var sideNav = document.getElementById("sideNav")
var menuIcon = document.getElementById("menuIcon")

menuIcon.onclick = function(){
sideNav.style.left="0%"
}

closeNav.onclick = function(){
sideNav.style.left="-50%"
}
