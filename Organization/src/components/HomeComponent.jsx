import React, { useEffect, useMemo, useState } from "react";
import "../Sass/HomeComponent.scss";
import PostStatus from "./common/PostUpdate";
import ConnectionsComponent from "./ConnectionsComponent";
import JobsComponent from "./JobsComponent"; // Make sure to import ConnectionsComponent
import { getJobs } from "../api/FirestoreAPI";

export default function HomeComponent({ currentUser }) {
const [jobs,setJobs] = useState([])

  useMemo(() => {
    getJobs(setJobs);
    console.log(jobs,"jobs")
  }, []);


  useEffect(() => {
    getJobs(setJobs);
    console.log(jobs,"jobsss")
  }, []); // Empty dependency array ensures the effect runs only once after initial render


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
    <div className="home-component">
      <div className="connections-container-left connections-home">
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
      <div className="main-content">
        <PostStatus currentUser={currentUser} />
      </div>
      <div className="connections-container-right connections-home">
        <ConnectionsComponent currentUser={currentUser} />
      </div>
    </div>
  );
}
