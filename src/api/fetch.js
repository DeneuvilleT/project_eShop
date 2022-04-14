import axios from "axios";


export function fetchApi() {

    return axios.get('database.json')
        .then(responseData => {
            return responseData
        }).catch(err => {
            return err
        })
}
