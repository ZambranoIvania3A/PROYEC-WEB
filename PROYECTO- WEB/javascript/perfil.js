function cerrarSesion() {
    // Mostrar mensaje de confirmación
    if (confirm("¿Estás seguro de que deseas cerrar la sesión?")) {
        // Si el usuario confirma, mostrar mensaje de sesión cerrada y redirigir
        alert("Sesión cerrada");
        // Redirigir a la página de inicio o de login
        window.location.href = "../html/sesionAdmin.html";
  
    }
  }
  function editarPerfil() {
    alert("Funcionalidad de edición de perfil aún no implementada");
    // Aquí puedes agregar la lógica para editar el perfil del administrador
  }
 // Función para redirigir a la página de opciones de administración
function gestionPostulaciones() {
    window.location.href = "../html/admOpciones.html"; // Redirigir a admOpciones.html
  }

