
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../App.css';
// import { Moon, Sun } from 'lucide-react'; // Import icons for theme toggle

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     // Apply theme class to document when theme changes
//     if (isDarkMode) {
//       document.documentElement.classList.remove('light-theme');
//       document.documentElement.classList.add('dark-theme');
//     } else {
//       document.documentElement.classList.remove('dark-theme');
//       document.documentElement.classList.add('light-theme');
//     }
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar-container">
//         <Link to="/" className="navbar-brand">
//           <span className="acm-logo">ACM</span> IIIT RANCHI Chapter
//         </Link>
//         <div className="nav-right">
//           <button 
//             className="theme-toggle-btn" 
//             onClick={toggleTheme} 
//             aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//           >
//             {isDarkMode ? (
//               <Sun size={20} className="theme-icon" />
//             ) : (
//               <Moon size={20} className="theme-icon" />
//             )}
//           </button>
//           <ul className="nav-menu">
//             <li className="nav-item">
//               <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`}>
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/events" className="nav-links">
//                 Events
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-links">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react'; // Import additional icons

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply theme class to document when theme changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="acm-logo">ACM</span> IIIT RANCHI Chapter
        </Link>
        <div className="nav-right">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun size={20} className="theme-icon" />
            ) : (
              <Moon size={20} className="theme-icon" />
            )}
          </button>
          
          {/* Mobile menu toggle button */}
          <button 
            className="menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Navigation menu with active state for mobile */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/events" 
                className={`nav-links ${location.pathname === '/events' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;