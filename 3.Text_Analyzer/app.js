const textArea = document.querySelector("textarea");
const characters = document.querySelector(".characters");
const words = document.querySelector(".words");
const clear = document.querySelector(".clear");
const char = document.createElement("span");
const wordcount = document.createElement("span");
const maxCount = 100;

textArea.addEventListener("input", () => {
    let count = 0;
    const text = textArea.value.trim();
    
    for(let i = 0; i<text.length; i++){
        if(text[i] != " "){
            count++;
        }
    }
    char.textContent = count;
    
    let words = textArea.value.trim().split(" ");
    words = words.filter(item => item != " ");
    wordcount.textContent = words.length;

    if (count >= maxCount) {
        textArea.value = words.slice(0, maxCount).join(" ");
        count = maxCount;
        alert("100 Character exceeded");
    }
});
characters.append(char);
words.append(wordcount);

clear.addEventListener("click", () => {
    char.textContent = "0";
    wordcount.textContent = "0";
});