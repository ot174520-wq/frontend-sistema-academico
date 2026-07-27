import axios from 'axios'
const carrerasApi = axios.create({
 baseURL: "http://127.0.0.1:8000/api/carreras/",
})
export const getCarreras = () => carrerasApi.get("/")
export const getCarrera = (id) => carrerasApi.get(`${id}/`)
export const createCarrera = (carrera) => carrerasApi.post("/", carrera)
export const updateCarrera = (id, carrera) => carrerasApi.put(`${id}/`, carrera)
export const deleteCarrera = (id) => carrerasApi.delete(`${id}/`)