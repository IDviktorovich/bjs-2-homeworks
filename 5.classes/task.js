class PrintEditionItem {

  constructor(name,releaseDate,pagesCount,state,type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 1.5;
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {

  constructor(name,releaseDate,pagesCount,state,type) {
    super(name,releaseDate,pagesCount,state);
    this.type = "magazine";
  }

}

class Book extends PrintEditionItem {

  constructor(author,name,releaseDate,pagesCount,state,type) {
    super(name,releaseDate,pagesCount,state);
    this.type = "book";
    this.author = author;
  }

}

class NovelBook extends Book {

  constructor(author,name,releaseDate,pagesCount,state,type) {
    super(author,name,releaseDate,pagesCount,state);
    this.type = "novel";
  }

}

class FantasticBook extends Book {

  constructor(author,name,releaseDate,pagesCount,state,type) {
    super(author,name,releaseDate,pagesCount,state);
    this.type = "fantastic";
  }

}

class DetectiveBook extends Book {

  constructor(author,name,releaseDate,pagesCount,state,type) {
    super(author,name,releaseDate,pagesCount,state);
    this.type = "detective";
  }

}

class Library {

  constructor(name,book) {
    this.name = "Библиотека имени Ленина";
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type,value) {
    return this.books.find(item => item[type] === value) || null;
  }
  giveBookByName(bookName) {
    if (this.books.findIndex(item => item.name === bookName) === -1) {
      return null;
    } else {
      let neededBook = this.books.splice(this.books.findIndex(item => item.name === bookName), 1);
      return neededBook.find(item => item.name === bookName);
    }
  }
}

const library = new Library();

const sherlock = new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008,
);
const wind = new NovelBook(
    "Маргарет Митчелл",
    "Унесенные ветром",
    1936,
    956,
);
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168,
);

sherlock.state = 31;

library.addBook(sherlock);

library.addBook(picknick);

library.addBook(wind);

// console.log('result of function: ', library.findBookBy("author", "Артур Конан Дойл"));

console.log("Количество книг до выдачи: " + library.books.length);
console.log(library.giveBookByName("Пикник на обочине"));
console.log("Количество книг после выдачи: " + library.books.length);
console.log(library);

picknick.state = 27;
picknick.fix();
console.log(picknick);
console.log(library);
library.addBook(picknick);
console.log(library);