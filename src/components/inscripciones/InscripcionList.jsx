import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { getInscripciones, deleteInscripcion } from "../../api/inscripciones"
export default function InscripcionList() {
 const [inscripciones, setInscripciones] = useState([])
 const navigate = useNavigate()
 const loadInscripciones = async () => {
 const response = await getInscripciones()
 setInscripciones(response.data)
 }
 useEffect(() => {
 loadInscripciones()
 }, [])
 const handleDelete = async (id) => {
 await deleteInscripcion(id)
 setInscripciones(inscripciones.filter((i) => i.id !== id))
 toast.success("Inscripción eliminada correctamente")
 }
 return (
 <div className="mt-4">
 <div className="flex justify-between items-center mb-4">
 <h1 className="text-3xl font-bold text-sky-900">Inscripciones</h1>
 <button
 className="bg-green-600 text-white px-4 py-2 rounded-lg"
 onClick={() => navigate("/nueva-inscripcion")}
 >
 Nueva Inscripción
 </button>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
 {inscripciones.map((inscripcion) => (
 <div key={inscripcion.id} className="bg-sky-900 p-4 rounded-lg shadow">
 <p className="font-bold">{inscripcion.alumno_nombre}</p>
 <p>Materia: {inscripcion.materia_nombre}</p>
 <p>Calificación: {inscripcion.calificacion ?? "Pendiente"}</p>
 <div className="mt-4">
 <button
 className="bg-green-600 text-white px-2 py-1 rounded-lg"
 onClick={() => navigate("/editar-inscripcion/" + inscripcion.id)}
 >
 Editar
 </button>
 <button
 className="bg-red-600 text-white px-2 py-1 rounded-lg ml-2"
 onClick={() => handleDelete(inscripcion.id)}
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