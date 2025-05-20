import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import PositionHolderCard from './components/PositionHolderCard';
import OtherMembersList from './components/OtherMembersList';
import ContactsPage from './pages/ContactsPage';

// Import images
import arionDas from './assets/arion_das.jpg';
import prachiKumari from './assets/prachi_dubey.jpeg';
import akshayDubey from './assets/akshay_kumar_dubey.jpeg';
import anshuKumar from './assets/anshu.jpeg';
import aakashSemwal from './assets/aakash_semwal.jpeg';

function App() {
  const positionHolders = [
    {
      post: 'Chair',
      name: 'Arion Das',
      vision: 'Only one seed in a mango.',
      imageUrl: arionDas
    },
    {
      post: 'Vice Chair',
      name: 'Prachi Kumari',
      vision: 'To empower every member to contribute meaningfully and collaboratively, fostering a vibrant and inclusive tech community.',
      imageUrl: prachiKumari
    },
    {
      post: 'Secretary',
      name: 'Akshay Kumar Dubey',
      vision: 'To ensure smooth coordination and communication across all chapter activities, making every initiative efficient and impactful.',
      imageUrl: akshayDubey
    },
    {
      post: 'Treasurer',
      name: 'Anshu Kumar',
      vision: 'Our aim is to make the ACM Student Chapter a hub of innovation, where every student can explore, create, and share technology that makes a difference. Our vision is a community that inspires curiosity, fosters bold ideas, and drives real-world impact.',
      imageUrl: anshuKumar
    },
    {
      post: 'Webmaster',
      name: 'Aakash Semwal',
      vision: 'To build and maintain a dynamic digital presence that reflects the spirit of our chapter and keeps our community informed, engaged, and inspired.',
      imageUrl: aakashSemwal
    }
  ];

  const otherMembers = [
    'Mohit Verma', 'Sahil Raj', 'Sahil Aggarwal', 'Anshu Kumar', 
    'Ayush Kushwaha', 'Aakash Semwal', 'Satyam Kumar', 'Shaurya Singh', 
    'Swapnil', 'Vikram Choudhary', 'Yogeshwar Yadav'
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <header>
                  <h1>ACM STUDENT CHAPTER - IIIT RANCHI</h1>
                  <p className="tagline">Advancing Computing as a Science & Profession</p>
                  <button className="join-btn">Join Us</button>
                </header>
                
                <section className="position-holders">
                  <h2>Leadership Team</h2>
                  <div className="position-holders-list">
                    {positionHolders.map((holder, index) => (
                      <PositionHolderCard 
                        key={index}
                        post={holder.post}
                        name={holder.name}
                        vision={holder.vision}
                        imageUrl={holder.imageUrl}
                      />
                    ))}
                  </div>
                </section>
                
              
                  <OtherMembersList members={otherMembers} />
              
              </>
            } />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<div>This is the events page</div>} />
            <Route path="/contact" element={<ContactsPage />} />
          </Routes>
        </main>
        
        <footer>
          <div className="footer-content">
            <div className="social-links">
              <a href="https://twitter.com/acm_iiitranchi" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UC-example" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/acm_iiitranchi/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/acm.iiitranchi" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
            <p>Contact Us: <a href="mailto:acm.chapter@cse.iiit.ac.in">acm.chapter@cse.iiit.ac.in</a></p>
            <p>© {new Date().getFullYear()} ACM Student Chapter - IIIT RANCHI. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;