

var closeNav = document.getElementById("closeNav")
var sideNav = document.getElementById("sideNav")
var menuIcon = document.getElementById("menuIcon")

var closeAdd = document.getElementById("closeAdd")
var addCard = document.getElementById("addCard")

menuIcon.onclick = function(){
sideNav.style.left="0%"
}

closeNav.onclick = function(){
sideNav.style.left="-50%"
}

closeAdd.onclick = function(){
addCard.style.display="none"
}

var search=document.getElementById("search")
var products=document.querySelectorAll(".product")

var occasionFilters=document.querySelectorAll(".occasion-checkbox")
var colorFilters=document.querySelectorAll(".color-checkbox")
var arrivalFilters=document.querySelectorAll(".arrival-checkbox")

function filterProducts(){

let searchValue=search.value.toUpperCase()

let selectedOccasion=[]
let selectedColor=[]
let selectedArrival=[]

occasionFilters.forEach(cb=>{
if(cb.checked) selectedOccasion.push(cb.value)
})

colorFilters.forEach(cb=>{
if(cb.checked) selectedColor.push(cb.value)
})

arrivalFilters.forEach(cb=>{
if(cb.checked) selectedArrival.push(cb.value)
})

products.forEach(product=>{

let name=product.querySelector("h1").textContent.toUpperCase()

let occasion=product.dataset.occasion
let color=product.dataset.color
let arrival=product.dataset.arrival

let matchSearch=name.includes(searchValue)

let matchOccasion=selectedOccasion.length==0 || selectedOccasion.includes(occasion)
let matchColor=selectedColor.length==0 || selectedColor.includes(color)
let matchArrival=selectedArrival.length==0 || selectedArrival.includes(arrival)

if(matchSearch && matchOccasion && matchColor && matchArrival){
product.style.display="block"
}else{
product.style.display="none"
}

})

}

search.addEventListener("keyup",filterProducts)

document.querySelectorAll("input[type='checkbox']")
.forEach(box=>box.addEventListener("change",filterProducts))
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.remove("opacity-0");
      element.classList.remove("translate-y-10");
    }
  });
});

