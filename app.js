let myLibrary = [];

const tableBody = document.getElementById('tbody');

function Book(title, author, status) {
  this.title = title
  this.author = author
  this.status = status
}

function pushBookToLibrary(title, author, status) {
  let newBook = new Book(title, author, status);
  myLibrary.push(newBook);
}

function displayLibrary() {
  // delete contents of table to render new table with full library
  tableBody.innerHTML = "";

  for (i = 0; i < myLibrary.length; i++) { // loop through each book in library
    window.newRow = document.createElement('tr');
    newRow.className = "bookRow";

    for (let key in myLibrary[i]) { // loop through each property of book
      let value = myLibrary[i][key];
      window.newCell = document.createElement('td');

      if (key === "status") {
        createReadBtn(value);
      } else {
        newCell.innerHTML = value;
      }

      newRow.appendChild(newCell);
    }

    createDeleteBtn();

    tableBody.appendChild(newRow);
  }
}

function createReadBtn(value) {
  let readBtn = document.createElement("button");
  readBtn.className = "read-btn";
  readBtn.innerHTML = value;
  if (value === "Read") {
    readBtn.style.backgroundColor = '#7eff7a';
  } else if (value === "Not Read") {
    readBtn.style.backgroundColor = "";
  }
  readBtn.addEventListener("click", swapReadBtn);
  newCell.appendChild(readBtn);
}

function swapReadBtn(e) {
  if (e.target.innerHTML === "Read") {
    e.target.innerHTML = "Not Read";
    e.target.style.backgroundColor = "";
    // Change read status in myLibrary
    for (i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].title ===
        e.target.parentNode.parentNode.childNodes[0].innerHTML) {
        myLibrary[i].status = "Not Read";
      };
    }
  } else if (e.target.innerHTML === "Not Read") {
    e.target.innerHTML = "Read";
    e.target.style.backgroundColor = "#7eff7a";
    // Change read status in myLibrary
    for (i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].title ===
        e.target.parentNode.parentNode.childNodes[0].innerHTML) {
        myLibrary[i].status = "Read";
      };
    }
  }
}

function createDeleteBtn() {
  let newCell = document.createElement('td');
  let deleteBtn = document.createElement('button');
  deleteBtn.className = ("delete");
  deleteBtn.innerHTML = "Delete";
  newCell.appendChild(deleteBtn);
  newRow.appendChild(newCell);

  // Delete entire row that the button is in when clicked
  deleteBtn.addEventListener("click", (event) =>
    deleteBtn.parentNode.parentNode.parentNode.removeChild(
      deleteBtn.parentNode.parentNode));
}

function showForm() {
  document.getElementById("overlay").style.display = "block";
}

function hideForm() {
  document.getElementById("overlay").style.display = "none";
}

function submitForm() {
  let title = document.getElementById("title-input").value;
  let author = document.getElementById("author-input").value;
  let read = document.getElementById("read-checkbox");
  let status = read.checked ? "Read" : "Not Read";
  pushBookToLibrary(title, author, status);
  displayLibrary();
  hideForm();
  clearForm();
}

function clearForm() {
  document.getElementById("title-input").value = "";
  document.getElementById("author-input").value = "";
  document.getElementById("read-checkbox").checked = false;
}

function addBook() {
  showForm();
  const submitBtn = document.getElementById("submit-button");
  submitBtn.addEventListener("click", submitForm);
}

const newBookBtn = document.getElementById("new-book");
newBookBtn.addEventListener("click", addBook);

const overlay = document.getElementById("overlay");
overlay.addEventListener("click", hideForm);

const form = document.querySelector("form");
form.addEventListener("click", function(e) {
  e.stopPropagation();
});

pushBookToLibrary('The Hobbit', 'JRR Tolkien', 'Not Read');
pushBookToLibrary('Light of the Jedi', 'Charles Soule', 'Read');
displayLibrary();