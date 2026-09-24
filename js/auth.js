const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
}

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    showMessage("Iniciando sesión...", "success");

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

    if (error) {

        console.error(error);

        showMessage(
            "No se pudo iniciar sesión. Revisa tu correo y contraseña.",
            "error"
        );

        return;
    }

    showMessage(
        "Inicio de sesión correcto. Entrando...",
        "success"
    );

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 800);
});
