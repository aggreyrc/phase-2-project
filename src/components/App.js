import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';

function App() {

  //Fetching Books
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://gutendex.com/books/')
     .then(response => response.json())
     .then(books => setBooks(books))
     .catch(error => console.error('Error:', error))
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
