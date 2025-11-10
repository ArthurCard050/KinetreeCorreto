import { Routes, Route } from "react-router-dom";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ProjectsPage from "@/react-app/pages/Projects";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/projetos" element={<ProjectsPage />} />
      <Route path="/contato" element={<ContactPage />} />
    </Routes>
  );
}


