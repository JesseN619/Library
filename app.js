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
        if (value === "read") {
          createReadBtn();
        } else if (value === "not read") {
          createNotReadBtn();
        }
      } else {
        newCell.innerHTML = value;
      }
      
      newRow.appendChild(newCell);
    }

    createDeleteBtn();

    tableBody.appendChild(newRow);
  }
}

function createReadBtn() {
  let readBtn = document.createElement("button");
  readBtn.innerHTML = "Read";
  readBtn.addEventListener("click", swapReadBtn);
  newCell.appendChild(readBtn);
}

function createNotReadBtn() {
  let readBtn = document.createElement("button");
  readBtn.innerHTML = "Not Read";
  readBtn.addEventListener("click", swapReadBtn);
  newCell.appendChild(readBtn);
}

function swapReadBtn(e) {
  if (e.target.innerHTML === "Read") {
    e.target.innerHTML = "Not Read";
    // Change read status in myLibrary
    for (i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].title === e.target.parentNode.parentNode.childNodes[0].innerHTML) {
        myLibrary[i].status = "not read";
      };
    }
  } else if (e.target.innerHTML === "Not Read") {
    e.target.innerHTML = "Read";
    // Change read status in myLibrary
    for (i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].title === e.target.parentNode.parentNode.childNodes[0].innerHTML) {
        myLibrary[i].status = "read";
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
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let read = document.getElementById("read");
  let status = read.checked ? "read" : "not read";
  pushBookToLibrary(title, author, status);
  displayLibrary();
  hideForm();
}

function addBook() {
  showForm();
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", submitForm);
}

const newBookBtn = document.getElementById("new-book");
newBookBtn.addEventListener("click", addBook);

const overlay = document.getElementById("overlay");
//overlay.addEventListener("click", hideForm);

//let testBook = new Book('The Hobbit', 'JRR Tolkien', 'read');
//displayLibrary();