import axios from 'axios';
export function getSVG(url){
    return axios.get(url).then(req => req.data);
}