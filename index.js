var closeNav = document.getElementById("closeNav")
var sideNav = document.getElementById("sideNav")
var menuIcon = document.getElementById("menuIcon")
var closeAdd = document.getElementById("closeAdd")
var addCard = document.getElementById("addCard")

menuIcon.addEventListener("click", function () {
    sideNav.style.left = "0%"
})

closeNav.addEventListener("click", function () {
    sideNav.style.left = "-50%"
})

closeAdd.addEventListener("click", function () {
    addCard.style.display = "none"
})


var sliderContainer = document.getElementById("slider-image-container")
var leftBtn = document.getElementById("leftBtn")
var rightBtn = document.getElementById("rightBtn")

var index = 0
var totalSlides = sliderContainer.children.length

function updateSlider(){
    sliderContainer.style.transform = "translateX(-" + index * 100 + "%)"
}

rightBtn.addEventListener("click",function(){

    index++

    if(index >= totalSlides){
        index = 0
    }

    updateSlider()

})

leftBtn.addEventListener("click",function(){

    index--

    if(index < 0){
        index = totalSlides - 1
    }

    updateSlider()

})


var hearts = document.querySelectorAll(".heart")

hearts.forEach(function(heart){

heart.addEventListener("click", function(){

if(heart.classList.contains("liked")){
heart.classList.remove("liked")
heart.setAttribute("fill","none")
heart.style.stroke = "black"
}
else{
heart.classList.add("liked")
heart.setAttribute("fill","red")
heart.style.stroke = "red"
}

})

})

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.remove("opacity-0", "translate-y-10");
entry.target.classList.add("opacity-100", "translate-y-0");

}

});

});

reveals.forEach(section => {
observer.observe(section);
});

