import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Header from "./components/Header"


import AlumnoList from "./components/alumnos/AlumnoList"
import AlumnoForm from "./components/alumnos/AlumnoForm"
import CarreraList from "./components/carreras/CarreraList"
import CarreraForm from "./components/carreras/CarreraForm"
import MateriaList from "./components/materias/MateriaList"
import MateriaForm from "./components/materias/MateriaForm"
import InscripcionList from "./components/inscripciones/InscripcionList"
import InscripcionForm from "./components/inscripciones/InscripcionForm"


function App() {
   return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<AlumnoList />} />
          <Route path="/nuevo-alumno" element={<AlumnoForm />} />
          <Route path="/editar-alumno/:id" element={<AlumnoForm />} />
          <Route path="/carreras" element={<CarreraList />} />
          <Route path="/nueva-carrera" element={<CarreraForm />} />
          <Route path="/editar-carrera/:id" element={<CarreraForm />} />
          <Route path="/materias" element={<MateriaList />} />
          <Route path="/nueva-materia" element={<MateriaForm />} />
          <Route path="/editar-materia/:id" element={<MateriaForm />} />
          <Route path="/inscripciones" element={<InscripcionList />} />
          <Route path="/nueva-inscripcion" element={<InscripcionForm />} />
          <Route path="/editar-inscripcion/:id" element={<InscripcionForm />} />
     </Routes>
    <Toaster />
  </div>
 </BrowserRouter>
 )
}
export default App