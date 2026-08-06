import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Inicio from "../pages/Inicio";
import Perfil from "../pages/Perfil";
import Academico from "../pages/Academico";
import Experiencia from "../pages/Experiencia";
import Habilidades from "../pages/Habilidades";
import Contacto from "../pages/Contacto";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/academico" element={<Academico />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;