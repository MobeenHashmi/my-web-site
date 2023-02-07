var library = [  
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true 
    }, 
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true 
    }, 
    { 
        author: 'Suzanne Collins', 
        title:  'Mockingjay: The Final Book of The Hunger Games',  
        readingStatus: false 
    }]; 
  
  for (var i = 0; i < library.length; i++) {
    var book = library[i];
    var readingStatus;
    if (book.readingStatus) {
      readingStatus = "already read";
    } else {
      readingStatus = "not read yet";
    }
    console.log("Title: " + book.title + "\nAuthor: " + book.author + "\nReading Status: " + readingStatus + "\n");
  }
  