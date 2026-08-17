let input = document.getElementById("text");
let add = document.querySelector("button");       
let unorderdList = document.querySelector("ol"); 

function addItem() {
  if (input.value.trim() !== "") {
    let list = document.createElement("li");
    list.textContent = input.value;
    list.style.margin = "15px 0px";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.margin = "0px 15px";

    deleteBtn.addEventListener("click", () => deleteBtn.parentElement.remove());

    list.appendChild(deleteBtn);
    unorderdList.appendChild(list);

    input.value = "";
  }
}

// Press Enter inside input
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();   
  }
});


add.addEventListener("click", addItem);
