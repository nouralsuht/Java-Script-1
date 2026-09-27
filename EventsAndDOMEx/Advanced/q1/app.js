const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul =document.querySelector("#ul");

btn.addEventListener("click",function()
{
    if (input.value.trim() === "") {
        return;
    }
const listItem= document.createElement("li");
const span = document.createElement("span");
const deleteBtn =document.createElement("button");
ul.appendChild(listItem);
listItem.appendChild(span);
listItem.appendChild(deleteBtn);
span.textContent=input.value;
deleteBtn.textContent="delete";
input.value = "";
input.focus();
deleteBtn.addEventListener("click",function(){
    listItem.remove();
})

});