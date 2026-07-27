import axios from 'axios'
const materiasApi = axios.create({
 baseURL: "http://127.0.0.1:8000/api/materias/",
})
export const getMaterias = () => materiasApi.get("/")
export const getMateria = (id) => materiasApi.get(`${id}/`)
export const createMateria = (materia) => materiasApi.post("/", materia)
export const updateMateria = (id, materia) => materiasApi.put(`${id}/`, materia)
export const deleteMateria = (id) => materiasApi.delete(`${id}/`)