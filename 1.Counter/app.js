let positive = document.querySelector(".positive");
let negative = document.querySelector(".negative");
let reset = document.querySelector(".reset");
let para = document.querySelector("p");
let count = parseInt(para.innerText);

positive.addEventListener("click", () => {
    count++;
    para.innerText = count;
});
negative.addEventListener("click", () => {
    count--;
    para.innerText = count ;
});
reset.addEventListener("click", () => {
    count = 0;
    para.innerText = count ;
});