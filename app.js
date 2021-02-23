let myLibrary = [];

const library = document.getElementById('library');

function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
  this.info = function() {
    //return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.haveRead
    return `${title} by ${author}, ${pages} pages, ${haveRead}`
  }
}

function addBookToLibrary(title, author, pages, haveRead) {
  let newBook = new Book(title, author, pages, haveRead);
  myLibrary.push(newBook);
}

function displayLibrary() {
  for (i = 0; i < myLibrary.length; i++) { // loop through each book in library
    // create Book card __ let div = document.createElement('div')
    let bookCard = document.createElement('div');
    // add CSS class to Book card __ div.className = 'myclass'
    for (const property in myLibrary[i]) { // loop through each property in book
      // 
      console.log(myLibrary[i][property]);
    }

    library.appendChild(bookCard);
  }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary("Star Wars", "George Lucas", 300, "read");
addBookToLibrary("The Outsider", "Stephen King", 400, "not read");

console.log(displayLibrary());