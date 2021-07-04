import axios from 'axios';

// Base configuration for our axios. 
export default axios.create({
    baseURL: 'http://localhost:5000/api/',
});