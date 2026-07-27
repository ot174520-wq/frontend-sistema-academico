import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { getCarreras, deleteCarrera } from "../../api/carreras"
export default function CarreraList() {
 const [carreras, setCarreras] = useState([])
 const navigate = useNavigate()
 const loadCarreras = async () => {
 const response = await getCarreras()
 setCarreras(response.data)
 }
 useEffect(() => {
 loadCarreras()
 }, [])
 const handleDelete = async (id) => {
 await deleteCarrera(id)
 setCarreras(carreras.filter((c) => c.id !== id))
 toast.success("Carrera eliminada correctamente")
 }
 return (
 <div className="mt-4">
 <div className="flex justify-between items-center mb-4">
 <h1 className="text-3xl font-bold text-sky-900">Carreras</h1>
 <button
 className="bg-green-600 text-white px-4 py-2 rounded-lg"
 onClick={() => navigate("/nueva-carrera")}
 >
 Nueva Carrera
 </button>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
 {carreras.map((carrera) => (
 <div key={carrera.id} className="bg-sky-900 p-4 rounded-lg shadow">
 <p className="font-bold">{carrera.nombre}</p>
 <p>Clave: {carrera.clave}</p>
 <div className="mt-4">
 <button
 className="bg-green-600 text-white px-2 py-1 rounded-lg"
 onClick={() => navigate("/editar-carrera/" + carrera.id)}
 >
 Editar
 </button>
 <button
 className="bg-red-600 text-white px-2 py-1 rounded-lg ml-2"
 onClick={() => handleDelete(carrera.id)}
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