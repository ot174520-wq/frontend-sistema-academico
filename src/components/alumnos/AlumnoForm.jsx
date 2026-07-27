import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { createAlumno, getAlumno, updateAlumno } from "../../api/alumnos"
import { getCarreras } from "../../api/carreras"
export default function AlumnoForm() {
 const [alumno, setAlumno] = useState({
 nombre: "", apellido: "", matricula: "", correo: "", carrera: "",
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
 const loadAlumno = async () => {
 if (params.id) {
 const response = await getAlumno(params.id)
 setAlumno(response.data)
 }
 }
 loadAlumno()
 }, [params.id])
 const handleSubmit = async (e) => {
 e.preventDefault()
 if (params.id) {
    await updateAlumno(params.id, alumno)
 toast.success("Alumno actualizado correctamente")
 } else {
 await createAlumno(alumno)
 toast.success("Alumno creado correctamente")
 }
 navigate("/")
 }
 return (
 <form onSubmit={handleSubmit} className="max-w-md">
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Nombre</label>
 <input
 value={alumno.nombre}
 type="text"
 onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Apellido</label>
 <input
 value={alumno.apellido}
 type="text"
 onChange={(e) => setAlumno({ ...alumno, apellido: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Matrícula</label>
 <input
 value={alumno.matricula}
 type="text"
 onChange={(e) => setAlumno({ ...alumno, matricula: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Correo</label>
 <input
 value={alumno.correo}
 type="email"
 onChange={(e) => setAlumno({ ...alumno, correo: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Carrera</label>
 <select
 value={alumno.carrera}
 onChange={(e) => setAlumno({ ...alumno, carrera: e.target.value })}
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
 onClick={() => navigate("/")}
 >
 Cancelar
 </button>
 </div>
 </form>
 )
}