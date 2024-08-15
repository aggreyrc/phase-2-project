import React, { useState } from "react";

const SubjectFilter = ({ categories, onSubjectChange}) => {
    const handleClick = (subject) => {
        onSubjectChange(subject);
      };

  return (
    <div className="container">
      <h1>CATEGORIES</h1>
      <ul className="categories">
        {categories.map((subject, index) => (
          <li key={index} onClick={() => handleClick(subject)}>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectFilter;
