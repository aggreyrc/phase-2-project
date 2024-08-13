import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import BookList from './BookList';

function App() {

  //Fetching Books
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://gutendex.com/books/')
     .then(response => response.json())
     .then(data => setBooks(data.results))
     .catch(error => console.error('Error:', error))
  }, []);


  return (
    <div className="App">
      <Header />
      <BookList
      books = {books}
      />
  
    </div>
  );
}

export default App;
