

import React from 'react';
import './ContactPage.css';

const ContactsPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Get in touch with the ACM Student Chapter at IIIT Ranchi for any queries, 
          collaborations, or more information about our activities.
        </p>
      </div>

      <div className="contact-cards-container">
        {/* Institute Card */}
        <div className="contact-card">
          <div className="card-header">
            <h2>Institute Contact</h2>
            <p>IIIT Ranchi Contact Information</p>
          </div>
          <div className="card-body">
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Address</div>
                <div className="info-value">
                  IIIT Ranchi, ARTTC BSNL Campus, Getlatu, Near Jumar River Bridge, 
                  P.O.: Neori Vikas Vidyalaya SO, Hazaribagh Road, Ranchi -835217 (Jharkhand)
                </div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Website</div>
                <div className="info-value">
                  <a href="http://www.iiitranchi.ac.in" target="_blank" rel="noopener noreferrer">
                    www.iiitranchi.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professor Card */}
        <div className="contact-card">
          <div className="card-header">
            <h2>Faculty Advisor</h2>
            <p>Professor Contact Information</p>
          </div>
          <div className="card-body">
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Name</div>
                <div className="info-value">Dr. Ravi Shanker</div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Designation</div>
                <div className="info-value">Assistant Professor</div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Specialization</div>
                <div className="info-value">
                  <div className="specialization-tags">
                    <span className="specialization-tag">Medical Image Processing</span>
                    <span className="specialization-tag">Machine Learning</span>
                    <span className="specialization-tag">Signal Processing</span>
                    <span className="specialization-tag">Optical Communication</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Contact Number</div>
                <div className="info-value">+91 7999935027</div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Email</div>
                <div className="info-value">
                  <a href="mailto:ravi@iiitranchi.ac.in">ravi@iiitranchi.ac.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactsPage;