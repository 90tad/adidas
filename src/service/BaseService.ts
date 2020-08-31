class BaseService {

    headers: Headers

    static instance: BaseService

    constructor() {
        this.headers = new Headers()
        this.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        this.headers.append('Access-Control-Allow-Credentials', 'true');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    static getInstance(): BaseService {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

    handleRes(res: Response) {
        return res.json()
    }

    get(endpoint: string) {
        return fetch(endpoint, {
            mode: 'cors',
            method: 'GET',
            headers: this.headers
        }).then(this.handleRes)
    }
}

export default BaseService
