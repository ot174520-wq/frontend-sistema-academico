import { Link } from 'react-router-dom'
export default function Header() {
   return (
    <nav className="bg-sky-900 text-white py-4 mb-6">
     <div className="container mx-auto flex justify-between items-center px-4">
      <Link to="/" className="text-xl font-bold">Sistema Académico</Link>
        <div className="flex gap-4">
          <Link to="/carreras" className="hover:underline">Carreras</Link>
           <Link to="/" className="hover:underline">Alumnos</Link>
        <Link to="/materias" className="hover:underline">Materias</Link>
      <Link to="/inscripciones" className="hover:underline">Inscripciones</Link>
    </div>
  </div>
 </nav>
 )
}