import React from 'react';
import "../Sass/SkillsComponent.scss";

export default function JobComponent() {
  // Dummy data for courses
  const courses = [
    { id: 1, title: 'Introduction to React', instructor: 'John Doe', link: 'https://legacy.reactjs.org/tutorial/tutorial.html' },
    { id: 2, title: 'JavaScript Fundamentals', instructor: 'Jane Smith', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { id: 3, title: 'HTML & CSS Basics', instructor: 'Alex Johnson', link: 'https://www.w3schools.com/html/html_css.asp' }
  ];

  const handleEnrollClick = (link) => {
    // Redirect the user to the enrollment page when the button is clicked
    window.location.href = link;
  };

  return (
    <div className="job-component">
      <h2>Enroll To The Course Now....</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <div>
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
            </div>
            <button onClick={() => handleEnrollClick(course.link)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
