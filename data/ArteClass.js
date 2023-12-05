import axios from "axios";
const URL_API_Artes = "http://localhost:5000";
const URL_API_Integrantes = "http://localhost:5000";

//essa função getIntegrantes utiliza o Axios para fazer uma requisição GET para uma URL de uma API, obtendo os 
//dados e retornando-os. Se houver algum problema durante a solicitação, o erro será exibido no console.
export const getIntegrantes = async () => {
    try {
        const response = await axios.get(`${URL_API_Integrantes}/integrantes`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//essa função getIntegrantesById usa o Axios para fazer uma requisição GET a uma URL específica da API, 
//buscando informações de um integrante com base no id fornecido como parâmetro. Se algo der errado na 
//requisição, o erro é registrado no console para análise posterior.
export const getIntegrantesById = async (id) => {
    try {
        const response = await axios.get(`${URL_API_Integrantes}/integrantes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//esse trecho de código é uma função chamada postIntegrantes que faz uma requisição POST para enviar dados de 
//um novo integrante para uma API. Se a requisição for bem-sucedida, ela retorna os dados do integrante recém-adicionado. 
//Em caso de erro, o código registra o erro no console para depuração.
export const postIntegrantes = async (integrantes) => {
    try {
        const response = await axios.post(`${URL_API_Integrantes}/integrantes`, integrantes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//essa função putIntegrantes utiliza o método HTTP PUT através do Axios para enviar dados atualizados de um
// integrante específico para a API. Se a operação for bem-sucedida, ela retorna os dados atualizados do 
//integrante. Caso haja algum erro, o erro é registrado no console para investigação posterior.
export const putIntegrantes = async (id, integrantes) => {
    try {
        const response = await axios.put(`${URL_API_Integrantes}/integrantes/${id}`, integrantes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//essa função deleteIntegrantes utiliza o método HTTP DELETE através do Axios para enviar uma requisição à API e
// deletar o integrante com o id fornecido. Se a operação for bem-sucedida, a resposta pode conter informações 
//mínimas, mas geralmente não haverá dados relevantes retornados. Caso haja algum erro, o erro é registrado no console para análise posterior.
export const deleteIntegrantes = async (id) => {
    try {
        const response = await axios.delete(`${URL_API_Integrantes}/integrantes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//essa função getArtes utiliza o método HTTP GET através do Axios para buscar informações sobre as artes de uma 
//API. Se a requisição for bem-sucedida, ela retorna os dados das artes. Caso haja algum erro, o erro é registrado
// no console para análise posterior.

export const getArtes = async () => {
    try {
        const response = await axios.get(`${URL_API_Artes}/artes`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }

//essa função getArtesById utiliza o método HTTP GET através do Axios para buscar informações sobre uma arte 
//específica na API, utilizando o id fornecido como parâmetro. Se a requisição for bem-sucedida, ela retorna os 
//dados detalhados da arte correspondente ao id. Caso ocorra algum erro, o erro é registrado no console para análise posterior.
export const getArtesById = async (id) => {
    try {
        const response = await axios.get(`${URL_API_Artes}/artes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//essa função postArtes utiliza o método HTTP POST através do Axios para enviar dados de uma nova arte para a API.
// Se a requisição for bem-sucedida, ela retorna os dados da arte recém-adicionada. Caso haja algum erro, o erro é
// registrado no console para análise posterior.
export const postArtes = async (artes) => {
    try {
        const response = await axios.post(`${URL_API_Artes}/artes`, artes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//essa função putArtes utiliza o método HTTP PUT através do Axios para enviar dados atualizados de uma arte 
//específica para a API. Se a operação for bem-sucedida, ela retorna os dados atualizados da arte. Em caso de erro, o erro é registrado no console para análise posterior.
export const putArtes = async (id, artes) => {
    try {
        const response = await axios.put(`${URL_API_Artes}/artes/${id}`, artes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
//essa função deleteArtes utiliza o método HTTP DELETE através do Axios para enviar uma requisição à API e 
//deletar a arte com o id fornecido. Se a operação for bem-sucedida, a resposta pode conter informações mínimas ou vazias. 
//Caso haja algum erro, o erro é registrado no console para análise posterior.
export const deleteArtes = async (id) => {
    try {
        const response = await axios.delete(`${URL_API_Artes}/artes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
