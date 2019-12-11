import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.foriio.com/api/v1'
});