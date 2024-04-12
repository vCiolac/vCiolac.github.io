import { Route, Routes } from 'react-router-dom';
import LayoutProvider from './context/LayoutProvider';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';
import NotFound from './Pages/NotFound';
import LoaderProvider from './context/LoaderProvider';


function App() {
  return (
    // <LoaderProvider>
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
    // </LoaderProvider>
  );
}

export default App;
