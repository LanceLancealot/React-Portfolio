import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="my-5">
      <div className="flex-row">
        <h1 className="section-title primary-border">Resume</h1>
      </div>
      <div className="flex-row">
        {/* Add your resume content here */}
        <p>Education:</p>
        <ul>
          <li>Degree, University, Year</li>
          {/* Add more education entries if needed */}
        </ul>
        <p>Experience:</p>
        <ul>
          <li>Job Title, Company, Year</li>
          {/* Add more experience entries if needed */}
        </ul>
        {/* Add more sections like skills, certifications, etc. */}
      </div>
    </section>
  );
};

export default Resume;

