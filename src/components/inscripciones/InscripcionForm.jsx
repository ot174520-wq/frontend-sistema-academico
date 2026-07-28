import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import {
 createInscripcion, getInscripcion, updateInscripcion,
} from "../../api/inscripciones"
import { getAlumnos } from "../../api/alumnos"
import { getMaterias } from "../../api/materias"
export default function InscripcionForm() {
 const [inscripcion, setInscripcion] = useState({
 alumno: "", materia: "", calificacion: "",
 })
 const [alumnos, setAlumnos] = useState([])
 const [materias, setMaterias] = useState([])
 const navigate = useNavigate()
 const params = useParams()
 useEffect(() => {
 const loadListas = async () => {
 const resAlumnos = await getAlumnos()
 setAlumnos(resAlumnos.data)
 const resMaterias = await getMaterias()
 setMaterias(resMaterias.data)
 }
 loadListas()
 }, [])
 useEffect(() => {
 const loadInscripcion = async () => {
 if (params.id) {
 const response = await getInscripcion(params.id)
 setInscripcion(response.data)
 }
 }
 loadInscripcion()
 }, [params.id])
 const handleSubmit = async (e) => {
 e.preventDefault()
 if (params.id) {
 await updateInscripcion(params.id, inscripcion)
 toast.success("Inscripción actualizada correctamente")
 } else {
 await createInscripcion(inscripcion)
 toast.success("Inscripción creada correctamente")
 }
 navigate("/inscripciones")
 }
 return (
 <form onSubmit={handleSubmit} className="max-w-md">
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Alumno</label>
 <select
 value={inscripcion.alumno}
 onChange={(e) => setInscripcion({ ...inscripcion, alumno: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 >
 <option value="">Selecciona un alumno</option>
 {alumnos.map((a) => (
 <option key={a.id} value={a.id}>{a.nombre} {a.apellido}</option>
 ))}
 </select>
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Materia</label>
 <select
 value={inscripcion.materia}
 onChange={(e) => setInscripcion({ ...inscripcion, materia: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 >
 <option value="">Selecciona una materia</option>
 {materias.map((m) => (
 <option key={m.id} value={m.id}>{m.nombre}</option>
 ))}
 </select>
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Calificación</label>
 <input
 value={inscripcion.calificacion || ""}
 type="number"
 step="0.1"
 onChange={(e) => setInscripcion({ ...inscripcion, calificacion: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mt-4">
 <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Guardar</button>
 <button
 type="button"
 className="bg-red-600 text-white px-4 py-2 rounded-lg ml-2"
 onClick={() => navigate("/inscripciones")}
 >
 Cancelar
 </button>
 </div>
 </form>
 )
}