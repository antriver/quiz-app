import axios from 'axios';

export const validateRoom = (code) => {
    return axios.get('/api/rooms/' + code);
};
