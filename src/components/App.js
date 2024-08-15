import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import BookList from "./BookList";
import SubjectFilter from "./SubjectFilter";

function App() {
  //Fetching Books
  const [books, setBooks] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);

        // Extract unique categories from books
        const uniqueCategories = Array.from(new Set(data.results.flatMap(book => book.subjects)));
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (selectedSubject) {
      fetch(`https://gutendex.com/books/?topic=${selectedSubject}`)
        .then((response) => response.json())
        .then((data) => setBooks(data.results))
        .catch((error) => console.error("Error:", error));
    }
  }, [selectedSubject]);

  function handleSubjectChange(subject) {
    setSelectedSubject(subject);
  }

 

  return (
    <div className="App">
      <Header />
      <BookList books={books}  selectedSubject={selectedSubject}/>
      <SubjectFilter
        categories = {categories}
        onSubjectChange={handleSubjectChange}
        selectedSubject={selectedSubject}
      /> 
    </div>
  );
}

export default App;
