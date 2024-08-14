import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import BookList from './BookList';
import SubjectFilter from './SubjectFilter';

function App() {

  //Fetching Books
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://gutendex.com/books/')
     .then(response => response.json())
     .then(data => setBooks(data.results))
     .catch(error => console.error('Error:', error))
  }, []);

  //Filtering books by subject
  const[selectedSubject, setSelectedSubject] = useState(null)

  function handleSubjectChange(subject){
    setBooks(books.filter((book) => book.subjects.includes(subject)));
  };

  function handleClick(subject){
    setSelectedSubject(subject)
    //onSubjectChange(subject);
  }

  return (
    <div className="App">
      <Header />
      <BookList
      books = {books}
      />
      <SubjectFilter 
      books={books}
      onSubjectChange={handleSubjectChange}
      handleClick={handleClick}
      selectedSubject={selectedSubject}
      />
  
    </div>
  );
}

export default App;
