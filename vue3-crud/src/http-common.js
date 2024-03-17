import axios from 'axios';
export default axios.create ({
    baseURL: 'http://192.168.31.33:8080/api',
    headers: {
        "Content-Type": "application/json"
    }
});