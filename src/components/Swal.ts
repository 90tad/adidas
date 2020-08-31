import S from "sweetalert2";

export const Swal = S.mixin({
    customClass: {
        popup: "border-0"
    },
    showClass: {
        popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp animate__faster'
    }
})

export const Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    showCancelButton: false,
    position: "bottom",
    timer: 3000,
})
