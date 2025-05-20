import React from 'react';
import '../App.css';

// Import faculty advisor image (replace with actual import path)
import raviShankar from '../assets/Ravisir.jpg';

function FacultyAdvisor() {
  return (
    <section className="faculty-advisor-section">
      <h2>Faculty Advisor</h2>
      
      <div className="faculty-card">
        <div className="faculty-image-container">
          <img src={raviShankar} alt="Dr. Ravi Shankar" className="faculty-image" />
        </div>
        
        <div className="faculty-details">
          <h3>Dr. Ravi Shanker</h3>
          <p className="faculty-education">Ph.D (IIITM Gwalior)</p>
          
          <div className="faculty-info">
            <div className="info-item">
              <span className="info-label">Designation:</span> 
              <span className="info-value">Assistant Professor</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Specialization:</span> 
              <span className="info-value">Medical Image Processing, Machine Learning, Signal Processing, Optical Communication.</span>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">Contact No.: +91 7999935027</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">Email: ravi@iiitrabnchi.ac.in</span>
              </div>
            </div>
            
            <a href="#" className="view-profile-btn">View Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacultyAdvisor;