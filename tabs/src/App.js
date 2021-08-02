import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaMapPin } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setJobs(newjobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1 className="loading">Loading...</h1>
      </section>
    );
  }
const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title"></div>
      <h1>Experience</h1>
      <div className="underline"></div>
      <section className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className="job-btn"
                onClick={() => {
                  setValue(index);
                }}
              >
                {job.company}
              </button>
            );
          })}
        </div>
      </section>
      <article className="job-info">
        <h3>{jobs[value].title}</h3>
        <h4>{jobs[value].company}</h4>
        <div className="job-date">{jobs[value].dates}</div>
        <p className="job-desc">{jobs[value].duties}</p>
      </article>
    </section>
  );
}

export default App;
