function Book(title, author, pages, IsRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.IsRead = IsRead;

    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.IsRead}`);
    }

}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");

console.log(theHobbit.info());