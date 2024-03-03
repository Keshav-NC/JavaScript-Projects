const notesContainer = document.querySelector("#notes-container");
const createBtn = document.querySelector("button");
const deleteNote = document.querySelector("img");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "pics/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

showNotes();

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    storeNotes();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        storeNotes();
      };
    });
  }
});

function storeNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
