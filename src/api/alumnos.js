import axios from 'axios'
const alumnosApi = axios.create({
 baseURL: "http://127.0.0.1:8000/api/alumnos/",
})
export const getAlumnos = () => alumnosApi.get("/")
export const getAlumno = (id) => alumnosApi.get(`${id}/`)
export const createAlumno = (alumno) => alumnosApi.post("/", alumno)
export const updateAlumno = (id, alumno) => alumnosApi.put(`${id}/`, alumno)
export const deleteAlumno = (id) => alumnosApi.delete(`${id}/`)