import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { createCarrera, getCarrera, updateCarrera } from "../../api/carreras"
export default function CarreraForm() {
 const [carrera, setCarrera] = useState({ nombre: "", clave: "" })
 const navigate = useNavigate()
 const params = useParams()
 useEffect(() => {
 const loadCarrera = async () => {
 if (params.id) {
 const response = await getCarrera(params.id)
 setCarrera(response.data)
 }
 }
 loadCarrera()
 }, [params.id])
 const handleSubmit = async (e) => {
 e.preventDefault()
 if (params.id) {
 await updateCarrera(params.id, carrera)
 toast.success("Carrera actualizada correctamente")
 } else {
 await createCarrera(carrera)
 toast.success("Carrera creada correctamente")
 }
 navigate("/carreras")
 }
 return (
 <form onSubmit={handleSubmit} className="max-w-md">
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Nombre</label>
 <input
 value={carrera.nombre}
 type="text"
 onChange={(e) => setCarrera({ ...carrera, nombre: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mb-4">
 <label className="block text-sm font-bold text-gray-700">Clave</label>
 <input
 value={carrera.clave}
 type="text"
 onChange={(e) => setCarrera({ ...carrera, clave: e.target.value })}
 className="w-full mt-1 p-2 border border-gray-300 rounded"
 />
 </div>
 <div className="mt-4">
 <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Guardar</button>
 <button
 type="button"
 className="bg-red-600 text-white px-4 py-2 rounded-lg ml-2"
 onClick={() => navigate("/carreras")}
 >
 Cancelar
 </button>
 </div>
 </form>
 )
}
