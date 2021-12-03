const boxes = document.querySelectorAll("div.box");
const reloadBtn = document.querySelector("div#reload");
const box = document.querySelector("div#box");

boxes.forEach(function(box){
    box.addEventListener("click", function() {
        box.classList.add("active");
    })
})

boxes.forEach(function(box){
    reloadBtn.addEventListener("click", function() {
        box.classList.remove("active");
    })
})