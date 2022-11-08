function handleFormularioInicioSesionSubmit(event){
    event.preventDefault();
    var nombres = document.querySelector('#nombre').value;
    var fapellido = document.querySelector('#papellido').value;
    var sapellido = document.querySelector('#sapellido').value;
    var correo = document.querySelector('#correo').value;
    var usuario = document.querySelector('#usuario').value;
    var contraseña = document.querySelector('#contraseña').value;
    var ccontraseña = document.querySelector('#ccontraseña').value;

    if(contraseña===ccontraseña){
        console.log(nombres, fapellido, sapellido, correo, usuario, contraseña, ccontraseña);
    }else{
        window.alert('Su contraseña no coincide');
    }
}

document
    .querySelector('#registro')
    .addEventListener('submit', handleFormularioInicioSesionSubmit);
