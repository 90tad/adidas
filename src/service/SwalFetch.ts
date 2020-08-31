import Service from "./Service";
import Swal from "sweetalert2"

class SwalFetch extends Service {
    getAllProducts() {
        return Swal.fire(({
            title: 'Auto close alert!',
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen(_: HTMLElement) {
                Swal.showLoading()
                return Service.prototype.getAllProducts.call(this)
            }
        }))
    }
}

export default SwalFetch
