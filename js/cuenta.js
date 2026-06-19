document.addEventListener("DOMContentLoaded", () => {
    // Solo manejar el botón Cancelar aquí; el guardado lo gestiona auth.js en crear_cuenta.html
    const cancelBtn = document.getElementById("cancel-btn");
    if (cancelBtn) {
        cancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }
});