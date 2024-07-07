import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault();

    const delay = event.target.delay.value;
    const state = event.target.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            iziToast.success({
                title: "OK",
                titleColor: "#fff",
                messageColor: "#fff",
                icon: "",
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topCenter",
                backgroundColor: "#59a10d"
            });
        })
        .catch(delay => {
            iziToast.error({
                title: "",
                icon: "",
                titleColor: "#fff",
                messageColor: "#fff",
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topCenter",
                backgroundColor: "#ef4040"
            });
        });
});
