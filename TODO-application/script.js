const clicked = document.querySelector("#lists ul li"),
  inputBox = document.querySelector("#input-box"),
  list = document.querySelector("#lists ul"),
  button = document.querySelector("#btn"),
  taskCompleted = document.querySelector("#taskCompleted ul li");

// Adding tasks into list
button.addEventListener("click", () => {
  if (inputBox.value === "") alert("Must write something!");
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);

    let img = document.createElement("img");
    img.src = "img/crossed.png";
    li.appendChild(img);
  }
  inputBox.value = "";
  saveData();
});

// toggling the list items
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    fe.target.classList.toggle("clicked");
    saveData();
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
});

// saving the data
const saveData = () => {
  localStorage.setItem("data", list.innerHTML);
};

// fetching the data
const fetchData = () => {
  list.innerHTML = localStorage.getItem("data");
};

fetchData();
