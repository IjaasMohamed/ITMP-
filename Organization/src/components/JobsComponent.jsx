import React, { useState } from 'react';

export default function JobsComponent({ currentUser }) {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobs, setJobs] = useState([]);

  const handlePostJob = (e) => {
    e.preventDefault();
    // Create a new job object
    const newJob = {
      id: Date.now(), // Generate a unique ID for each job
      title: jobTitle,
      description: jobDescription,
      // You can also add other job details like createdBy: currentUser.id, etc.
    };
    // Update the jobs list with the new job
    setJobs([...jobs, newJob]);
    // Clear the form fields after posting the job
    setJobTitle('');
    setJobDescription('');
  };

  const handleDeleteJob = (id) => {
    // Filter out the job with the specified ID
    const updatedJobs = jobs.filter(job => job.id !== id);
    setJobs(updatedJobs);
  };

  const handleUpdateJob = (id, updatedJob) => {
    // Find the index of the job with the specified ID
    const index = jobs.findIndex(job => job.id === id);
    if (index !== -1) {
      // Create a copy of the current jobs array
      const updatedJobs = [...jobs];
      // Update the job at the specified index
      updatedJobs[index] = { ...updatedJobs[index], ...updatedJob };
      // Set the updated jobs array
      setJobs(updatedJobs);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Post a Job</h1>
      <form onSubmit={handlePostJob} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
        />
        <textarea
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
        ></textarea>
        <button
          type="submit"
          style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Post Job
        </button>
      </form>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Jobs List</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} style={{ backgroundColor: '#fff', padding: '10px', marginBottom: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#333', marginBottom: '5px' }}>{job.title}</h2>
            <p style={{ color: '#666', marginBottom: '10px' }}>{job.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => handleDeleteJob(job.id)} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Delete
              </button>
              <button onClick={() => handleUpdateJob(job.id, { title: 'Updated Title', description: 'Updated Description' })} style={{ backgroundColor: '#ffc107', color: '#333', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
