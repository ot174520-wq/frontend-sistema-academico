import axios from 'axios'
const inscripcionesApi = axios.create({
 baseURL: "http://127.0.0.1:8000/api/inscripciones/",
})
export const getInscripciones = () => inscripcionesApi.get("/")
export const getInscripcion = (id) => inscripcionesApi.get(`${id}/`)
export const createInscripcion = (inscripcion) => inscripcionesApi.post("/", inscripcion)
export const updateInscripcion = (id, inscripcion) => inscripcionesApi.put(`${id}/`, 
inscripcion)
export const deleteInscripcion = (id) => inscripcionesApi.delete(`${id}/`)
