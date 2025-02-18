const myLibrary = [];


function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`);
    }

}

function addBookToLibrary(title, author, pages, isRead){
    const Books = new Book(title, author, pages, isRead);
    myLibrary.push(Books);
}

function showBooks(){
    const table = document.querySelector("#libraryTable tbody")
    for(i = 0; i < myLibrary.length; i++){
        const row = document.createElement("tr");
        
        const indexCell = document.createElement("th");
        indexCell.textContent = i + 1;
        row.appendChild(indexCell);

        const bookCell = document.createElement("td");
        bookCell.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, ${myLibrary[i].isRead}`;
        row.appendChild(bookCell);

        table.appendChild(row);
    }
}


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
addBookToLibrary("1984", "Gorge Orwell", 350, "read");
addBookToLibrary("The Republic", "Plato", 500, "not read yet");
addBookToLibrary("Pan Tadeusz", "Adam Mickiewicz", 400, "read");

showBooks()