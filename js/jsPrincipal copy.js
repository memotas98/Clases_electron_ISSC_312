function handleMiBotonClick(){
    window.alert('Esa opcion no esta disponible por el momento');
}

document.querySelector('#btnSaber').addEventListener('click', handleMiBotonClick);
document.querySelector('#mi-boton').addEventListener('click', handleMiBotonClick);
document.querySelector('#mi-boton2').addEventListener('click', handleMiBotonClick);
document.querySelector('#mi-boton3').addEventListener('click', handleMiBotonClick);
document.querySelector('#mi-boton4').addEventListener('click', handleMiBotonClick);
document.querySelector('#mi-boton5').addEventListener('click', handleMiBotonClick);
document.querySelector('#mi-boton6').addEventListener('click', handleMiBotonClick);

function handleMiBoton2Click(){
    window.alert('Juego agregado al carrito');
}

document.querySelector('#agregar').addEventListener('click', handleMiBoton2Click);
document.querySelector('#agregar2').addEventListener('click', handleMiBoton2Click);
document.querySelector('#agregar3').addEventListener('click', handleMiBoton2Click);
document.querySelector('#agregar4').addEventListener('click', handleMiBoton2Click);


var valor = true
function btnOn() {
  var uno = document.getElementById('agregar');
  valor?uno.innerText = "Agregado":uno.innerText = "Añadir al carrito de compra";
  valor?uno = console.log('Fornite agregado') :uno = console.log('Fornite descartado') ;
  valor=!valor
  console.log()
}

var valor2 = true
function btnOn2() {
    var uno2 = document.getElementById('agregar2');
    valor2?uno2.innerText = "Agregado":uno2.innerText = "Añadir al carrito de compra";
    valor2?uno2 = console.log('Bioshock agregado'):uno2 = console.log('Bioshock descartado');
    valor2=!valor2
  }

var valor3 = true
function btnOn3() {
    var uno3 = document.getElementById('agregar3');
      valor3?uno3.innerText = "Agregado":uno3.innerText = "Añadir al carrito de compra";
      valor3?uno3 = console.log('Minecraft agregado'):uno3 = console.log('Minecraft descartado');
      valor3=!valor3
  }

    var valor4 = true
    function btnOn4() {
        var uno4 = document.getElementById('agregar4');
        valor4?uno4.innerText = "Agregado":uno4.innerText = "Añadir al carrito de compra";
        valor4?uno4 = console.log('Stonks agregado'):uno4 = console.log('Stonks descartado');
        valor4=!valor4
      }
