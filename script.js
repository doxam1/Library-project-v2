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

const bookOne = new book ('The Art Of War', 'Sun Tzu', 273, true, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630683326i/10534.jpg');
myLibrary.push(bookOne);
showLibrary();

function book (author, title, pages, read, photo_url) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.photo_url = photo_url;
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
    const imgUrl = document.getElementById('urlInput').value;
    const read = document.getElementById('read').checked;

    const newBook = new book (author, title, pages, read, imgUrl);
    myLibrary.push(newBook)
    
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('urlInput').value = ''
    document.getElementById('read').checked = false;
    
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
        <div class='bookInLibrary' style='background: no-repeat  center url(${myLibrary[i].photo_url});background-size: cover;'>
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