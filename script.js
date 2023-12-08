const addBookDialog = document.querySelector('.addBookDialog');
document.querySelector('.addBook').addEventListener('click', ()=> addBookDialog.showModal());

const addBookBtn = document.querySelector('.addBookBtn');
document.querySelector('.CloseAddBookDialog').addEventListener('click', function(e){
    e.preventDefault();
    addBookDialog.close();
})

addBookBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    addBookDialog.close();
})

const myLibrary = [];
const libraryDiv = document.querySelector('.library');

const bookOne = new book ('test', 'testtoo', 256, true);
const bookTwo = new book ('bla', 'bla', 64, false)
myLibrary.push(bookOne, bookTwo);
showLibrary();

function book (author, title, page, read) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.read = read;
}

book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    showLibrary();
}

function addBookToLibrary() {
    
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new book (author, title, pages, read);
    myLibrary.push(newBook)
    showLibrary();

}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    showLibrary();  
}

function showLibrary() {
        libraryDiv.innerHTML = '';
    for (i=0; i < myLibrary.length; i++) {
        const libraryDivBook = document.createElement('div');
        libraryDivBook.innerHTML = `
        <div class='bookInLibrary'>
        <div class='bookTitle'>${myLibrary[i].title}</div>
        <div class='bookAuthor'>${myLibrary[i].author}</div>
        <div class='bookPages'>${myLibrary[i].pages}</div>
        <div class='bookRead'>${(myLibrary[i].read) ? 'already read' : "Didn't read"}</div>
        <button class='removeBook' onclick="deleteBook(${i})"> X </button>
        <button class='readBook' onclick="toggleRead(${i})"> change read status </button>
        </div>
        `;
        libraryDiv.appendChild(libraryDivBook);
    }
}