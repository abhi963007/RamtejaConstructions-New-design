import { Routes, Route } from 'react-router-dom';
import WebflowInitializer from './components/WebflowInitializer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Form from './pages/Form';

export default function App() {
  return (
    <WebflowInitializer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </WebflowInitializer>
  );
}
