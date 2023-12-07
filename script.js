const addBookDialog = document.querySelector('.addBookDialog');
document.querySelector('.addBook').addEventListener('click', ()=> addBookDialog.showModal());

const addBookBtn = document.querySelector('.addBookBtn');
document.querySelector('.CloseAddBookDialog').addEventListener('click', function(e){
    e.preventDefault();
    addBookDialog.close();
})

addBookBtn.addEventListener('click', (e)=>{
    e.preventDefault();
})