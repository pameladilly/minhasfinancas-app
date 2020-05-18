import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://pam-minhasfinancas-api.herokuapp.com'
})

class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl
    }

    post(url, objeto) {
        const requesUrl = `${this.apiurl}${url}`
        return httpClient.post(requesUrl, objeto)
    }

    put(url, objeto) {
        const requesUrl = `${this.apiurl}${url}`
        return httpClient.put(requesUrl, objeto)
    }

    delete(url) {
        const requesUrl = `${this.apiurl}${url}`
        return httpClient.delete(requesUrl)
    }

    get(url) {
        const requesUrl = `${this.apiurl}${url}`
        return httpClient.get(requesUrl)
    }
}

export default ApiService;