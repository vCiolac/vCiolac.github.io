import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LayoutProvider from './context/LayoutProvider';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';
import NotFound from './Pages/NotFound';

function App() {
  const location = useLocation();
  
  return (
    <LayoutProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/skills" Component={Skills} />
          <Route path="/certifications" Component={Certifications} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </AnimatePresence>
    </LayoutProvider>
  );
}

export default App;
