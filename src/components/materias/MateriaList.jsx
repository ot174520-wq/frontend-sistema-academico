import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { getMaterias, deleteMateria } from "../../api/materias"
export default function MateriaList() {
 const [materias, setMaterias] = useState([])
 const navigate = useNavigate()
 const loadMaterias = async () => {
 const response = await getMaterias()
 setMaterias(response.data)
 }
 useEffect(() => {
 loadMaterias()
 }, [])
 const handleDelete = async (id) => {
 await deleteMateria(id)
 setMaterias(materias.filter((m) => m.id !== id))
 toast.success("Materia eliminada correctamente")
 }
 return (
 <div className="mt-4">
 <div className="flex justify-between items-center mb-4">
 <h1 className="text-3xl font-bold text-sky-900">Materias</h1>
 <button
 className="bg-green-600 text-white px-4 py-2 rounded-lg"
 onClick={() => navigate("/nueva-materia")}
 >
 Nueva Materia
 </button>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
 {materias.map((materia) => (
 <div key={materia.id} className="bg-sky-900 p-4 rounded-lg shadow">
 <p className="font-bold">{materia.nombre}</p>
 <p>Créditos: {materia.creditos}</p>
 <p>Carrera: {materia.carrera_nombre}</p>
 <div className="mt-4">
<button
 className="bg-green-600 text-white px-2 py-1 rounded-lg"
 onClick={() => navigate("/editar-materia/" + materia.id)}
 >
 Editar
 </button>
 <button
 className="bg-red-600 text-white px-2 py-1 rounded-lg ml-2"
 onClick={() => handleDelete(materia.id)}
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