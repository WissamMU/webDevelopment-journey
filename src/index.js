window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/stylesheet.css";
import '@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))


    document.querySelectorAll('.add-to-cart-btn').forEach(item => {
        item.addEventListener("click", () => {
            alert("أضيف المُنتج إلى عربة الشراء")
        })
    })

console.log("hi");