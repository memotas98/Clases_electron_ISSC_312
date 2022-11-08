function handleFormularioInicioSesionSubmit(event)
{
    event.preventDefault();
    var usuario = document.querySelector('#Usuario').value;
    var password = document.querySelector('#Contraseña').value;
    console.log(usuario, password);
}

document
    .querySelector('#Inicio-Sesion')
    .addEventListener('submit', handleFormularioInicioSesionSubmit);