import axios from "axios";
const URL_API_Artes = "http://localhost:5000";
const URL_API_Integrantes = "http://localhost:5000";

//Consumir a API de integrantes
export const getIntegrantes = async () => {
    try {
        const response = await axios.get(`${URL_API_Integrantes}/integrantes`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const getIntegrantesById = async (id) => {
    try {
        const response = await axios.get(`${URL_API_Integrantes}/integrantes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const postIntegrantes = async (integrantes) => {
    try {
        const response = await axios.post(`${URL_API_Integrantes}/integrantes`, integrantes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const putIntegrantes = async (id, integrantes) => {
    try {
        const response = await axios.put(`${URL_API_Integrantes}/integrantes/${id}`, integrantes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const deleteIntegrantes = async (id) => {
    try {
        const response = await axios.delete(`${URL_API_Integrantes}/integrantes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
    //Consumir a API de artes  
export const getArtes = async () => {
    try {
        const response = await axios.get(`${URL_API_Artes}/artes`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const getArtesById = async (id) => {
    try {
        const response = await axios.get(`${URL_API_Artes}/artes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const postArtes = async (artes) => {
    try {
        const response = await axios.post(`${URL_API_Artes}/artes`, artes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const putArtes = async (id, artes) => {
    try {
        const response = await axios.put(`${URL_API_Artes}/artes/${id}`, artes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
export const deleteArtes = async (id) => {
    try {
        const response = await axios.delete(`${URL_API_Artes}/artes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
