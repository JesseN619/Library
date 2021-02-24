let myLibrary = [];

const library = document.getElementById('library');

function Book(title, author, status) {
  this.title = title
  this.author = author
  this.status = status
}

function addBookToLibrary(title, author, status) {
  let newBook = new Book(title, author, status);
  myLibrary.push(newBook);
}

function displayLibrary() {
  for (i = 0; i < myLibrary.length; i++) { // loop through each book in library
    let newRow = document.createElement('tr');
    
    for (let key in myLibrary[i]) { // loop through each property in book
      let value = myLibrary[i][key];
      let newCell = document.createElement('td');
      newCell.innerHTML = value;
      newRow.appendChild(newCell);
    }

    library.appendChild(newRow);
  }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "not read");
addBookToLibrary("Star Wars", "George Lucas", "read");
addBookToLibrary("The Outsider", "Stephen King", "not read");

displayLibrary();