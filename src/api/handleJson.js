import axios from "axios";

export function readJSON(path) {
    return axios('/personal-website/json/' + path + '.json')
}