import React from 'react'


const SubjectFilter = ({books, onSubjectChange,selectedSubject,handleClick})=> {
  return (
    <div>
        <h1>CATEGORIES</h1>
        <div className='container'>
        <ul className='categories'>
            {books.map((book) => (
                <li 
                key={book.id}
                onClick={handleClick(book.subjects[0])}>
                    {book.subjects[0]}
                    </li>
            ))}
        </ul>
        </div>
        {selectedSubject && (
            <ul>
                {books.filter((book) => book.subjects[0] === selectedSubject).map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))} 
                
            </ul>
        )}
        
        </div>
  )
}

export default SubjectFilter