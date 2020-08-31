import BaseService from "./BaseService";
import {PRODUCT_URL} from "./url/BaseUrl";

type ServiceType = {
    getAllProducts: any
}

class Service extends BaseService implements ServiceType {

    static instance: Service

    static getInstance(): Service {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

    getAllProducts() {
        return super.get(PRODUCT_URL)
    }
}

export default Service
