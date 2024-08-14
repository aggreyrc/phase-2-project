import React, {useState} from "react";
import Search from "./Search";

function BookList ({books}) {

      //Searching for books by author or title
      const [searchTerm, setSearchTerm] = useState("")

      function handleSearch(event){
        setSearchTerm(event.target.value);
      }

      const filteredBooks = books.filter((book) => {
        if(searchTerm ===""){
            return true;
        }else{
            return book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            book.authors[0].name.toLowerCase().includes(searchTerm.toLowerCase()); 
        }
      })

    return(
        <div>
            <Search handleSearch={handleSearch} />
            <h2>Book List</h2>
            <div className="container">
            <ul className="book-list">
            {filteredBooks.slice(0,12).map(book => (
                <li key={book.id}>
                    <img src={book.formats["image/jpeg"]} alt={book.title} />
                    <h3>{book.title}</h3>
                    <p>Author: {book.authors[0].name}</p>
                    <p>Download: <a href={book.formats["application/x-mobipocket-ebook"]}>Download</a></p>
                </li>
                ))};
                </ul>
                </div>
        </div>
    )
}

export default BookList;