import './App.css';
import Home from './components/Home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Education from './components/education';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Project from './components/project';
import Contact from './components/contact';
import { ToastContainer } from 'react-toastify';

const pageTransition = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  animate: { opacity: 1, x: 0 },
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
  }),
  transition: { duration: 0.5 },
};

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/skills', name: 'Skills' },
  { path: '/project',name: 'Project'},
  { path: '/education',name: 'Education'},
  { path: '/contact',name: 'Contact'}
];

function AnimatedRoutes() {
  const location = useLocation();
  const currentPath = location.pathname;

  const determineDirection = (newPath) => {
    const currentIndex = navLinks.findIndex((item) => item.path === currentPath);
    const newIndex = navLinks.findIndex((item) => item.path === newPath);
    return currentIndex < newIndex ? 1 : -1;
  };

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {navLinks.map((link, index) => (
          <Route
            key={index}
            path={link.path}
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                custom={determineDirection(link.path)}
                transition={pageTransition.transition}
              >
                {link.path === '/' && <Home />}
                {link.path === '/skills' && <Skills />}
                {link.path === '/project' && <Project />}
                {link.path === '/education' && <Education />}
                {link.path === '/contact' && <Contact/>}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div>
      <ToastContainer />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
