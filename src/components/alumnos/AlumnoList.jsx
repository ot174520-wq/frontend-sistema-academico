import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { getAlumnos, deleteAlumno } from "../../api/alumnos"
export default function AlumnoList() {
 const [alumnos, setAlumnos] = useState([])
 const navigate = useNavigate()
 const loadAlumnos = async () => {
 const response = await getAlumnos()
 setAlumnos(response.data)
 }
 useEffect(() => {
 loadAlumnos()
 }, [])
 const handleDelete = async (id) => {
 await deleteAlumno(id)
 setAlumnos(alumnos.filter((a) => a.id !== id))
 toast.success("Alumno eliminado correctamente")
 }
 return (
 <div className="mt-4">
 <div className="flex justify-between items-center mb-4">
 <h1 className="text-3xl font-bold text-sky-900">Alumnos</h1>
 <button
 className="bg-green-600 text-white px-4 py-2 rounded-lg"
 onClick={() => navigate("/nuevo-alumno")}
 >
 Nuevo Alumno
 </button>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
 {alumnos.map((alumno) => (
 <div key={alumno.id} className="bg-sky-900 p-4 rounded-lg shadow">
 <p className="font-bold">{alumno.nombre} {alumno.apellido}</p>
 <p>Matrícula: {alumno.matricula}</p>
 <p>Carrera: {alumno.carrera_nombre}</p>
 <div className="mt-4">
 <button
 className="bg-green-600 text-white px-2 py-1 rounded-lg"
 onClick={() => navigate("/editar-alumno/" + alumno.id)}
 >
 Editar
 </button>
 <button
 className="bg-red-600 text-white px-2 py-1 rounded-lg ml-2"
 onClick={() => handleDelete(alumno.id)}
 >
 Eliminar
 </button>
 </div>
 </div>
 ))}
 </div>
 </div>
 )
}