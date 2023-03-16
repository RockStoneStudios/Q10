import axios from "axios";


const clientAxios = axios.create({
    baseURL : 'https://rickandmortyapi.com/api/character',
    responseType : 'json',
    withCredentials : true
    
});

export default clientAxios;