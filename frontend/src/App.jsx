import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import PositionHolderCard from './components/PositionHolderCard';
import OtherMembersList from './components/OtherMembersList';
import ContactsPage from './pages/ContactsPage';
import raviShankar from './assets/Ravisir.jpg';


// Import images
import Vikram from './assets/vikram.jpg';
import priyanka_sharma from './assets/priyanka.jpg';
import Vivek_Kispotta from './assets/vivek.jpg';
import Debyash_Deka from './assets/debyash.jpg';
import Vipul_verma from './assets/vipul.jpg';
import EventsPage from './pages/EventsPage';

function App() {
  const positionHolders = [
       {
      post: 'Faculty Advisor',
      name: 'Dr. Ravi Shanker',
      vision: 'To guide and mentor the ACM Student Chapter, fostering a culture of innovation, collaboration, and excellence in computing.',  
      imageUrl: raviShankar
       },{
      post: 'Chair',
      name: 'Vikram',
      vision: 'To align collaborators towards AI research which promises to deliver better than existing solutions.',
      imageUrl : Vikram
    },
    {
      post: 'Vice Chair',
      name: 'Priyanka Sharma ',
      vision: 'As Vice Chair of our ACM student chapter, my technical vision is to advance engineering excellence through innovation and practical application, finding solutions and shaping the future of technology.',
      imageUrl : priyanka_sharma
    },
    {
      post: 'Secretary',
      name: 'Vivek Kispotta',
      vision: 'To ensure smooth coordination and communication across all chapter activities, making every initiative efficient and impactful.',
      imageUrl : Vivek_Kispotta
    },
    {
      post: 'Treasurer',
      name: 'Dibyash Deka',
      vision: 'Our aim is to make the ACM Student Chapter a hub of innovation, where every student can explore, create, and share technology that makes a difference. Our vision is a community that inspires curiosity, fosters bold ideas, and drives real-world impact.',
      imageUrl: Debyash_Deka
    },
    {
      post: 'Webmaster',
      name: 'Vipul Verma ',
      vision: 
      ' We aim to establish our chapter as the go-to resource for members, alumni, and the wider tech community, fostering engagement and knowledge sharing.',
      imageUrl : Vipul_verma
    }
  ];




  const otherMembers = [
    'Mohit Verma', 'Sahil Raj','Irfan Ansari','Sahil Aggarwal', 
    'Ayush Kushwaha', 'Satyam Kumar', 'Shaurya Singh', 
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
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactsPage />} />
          </Routes>
        </main>
        
        <footer>
          <div className="footer-content">
            <div className="social-links">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
        
              <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/share/1EaeGyF5F5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
            <p>Contact Us: <a href="mailto:acm_chair@iiitranchi.ac.in">acm_chair@iiitranchi.ac.in</a></p>
            <p>© {new Date().getFullYear()} ACM Student Chapter - IIIT RANCHI. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;