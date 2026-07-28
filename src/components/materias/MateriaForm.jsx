import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { createMateria, getMateria, updateMateria } from "../../api/materias"
import { getCarreras } from "../../api/carreras"
export default function MateriaForm() {
 const [materia, setMateria] = useState({
 nombre: "", clave: "", creditos: "", carrera: "",
 })
 const [carreras, setCarreras] = useState([])
 const navigate = useNavigate()
 const params = useParams()
 useEffect(() => {
 const loadCarreras = async () => {
 const response = await getCarreras()
 setCarreras(response.data)
 }
 loadCarreras()
 }, [])
 useEffect(() => {
 const loadMateria = async () => {
 if (params.id) {
 const response = await getMateria(params.id)
 setMateria(response.data)
 }
 }
 loadMateria()
 }, [params.id])
 const handleSubmit = async (e) => {
 e.preventDefault()
 if (params.id) {
 await updateMateria(params.id, materia)
 toast.success("Materia actualizada correctamente")
 } else {
 await createMateria(materia)
 toast.success("Materia creada correctamente")
 }
 navigate("/materias")
 }
 return (
 <form onSubmit={handleSubmit} className="max-w-md">
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Nombre</label>
 <input
 value={materia.nombre}
 type="text"
 onChange={(e) => setMateria({ ...materia, nombre: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Clave</label>
 <input
 value={materia.clave}
 type="text"
 onChange={(e) => setMateria({ ...materia, clave: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Créditos</label>
 <input
 value={materia.creditos}
 type="number"
 onChange={(e) => setMateria({ ...materia, creditos: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Carrera</label>
 <select
 value={materia.carrera}
 onChange={(e) => setMateria({ ...materia, carrera: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 >
 <option value="">Selecciona una carrera</option>
 {carreras.map((c) => (
 <option key={c.id} value={c.id}>{c.nombre}</option>
 ))}
 </select>
 </div>
 <div className="mt-4">
 <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Guardar</button>
 <button
 type="button"
 className="bg-red-600 text-white px-4 py-2 rounded-lg ml-2"
 onClick={() => navigate("/materias")}
 >
 Cancelar
 </button>
 </div>
 </form>
 )
}