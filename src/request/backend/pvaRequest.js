import axios from 'axios';
import { rematchError } from '../requestErrors';
import config from "../../config.json";

const pvaGetConnector = axios.create({
    baseURL: config[process.env.REACT_APP_TYPE_PROD],
});

export const getListAsso = () => {
    return pvaGetConnector.get("directory/")
        .then(response => {
            return response.data;
        }).catch(rematchError);
};

export const getDetailAsso = (id) => {
    return pvaGetConnector.get("directory/" + id + "/")
        .then(response => {
            return response.data;
        }).catch(rematchError);
};