import React from 'react'


const SubjectFilter = ({books})=> {
  return (
    <div>
        <h1>CATEGORIES</h1>
        <ul className='categories'>
            {books.map((book) => (
                <li key={book.id}>{book.subjects[0]}</li>
            ))}
        </ul>
        </div>
  )
}

export default SubjectFilter