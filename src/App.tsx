import { Route, Routes } from 'react-router-dom';
import LayoutProvider from './context/LayoutProvider';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';
import NotFound from './Pages/NotFound';

function App() {
  return (
      <LayoutProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/skills" Component={Skills} />
          <Route path="/certifications" Component={Certifications} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </LayoutProvider>
  );
}

export default App;
