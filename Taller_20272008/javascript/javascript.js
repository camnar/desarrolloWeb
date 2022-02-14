
function validarFormulario() {

    var resultados = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('inputCorreo').value,
        alojamiento: document.getElementById('inputAlojamiento').value,
        fechaSalida: document.getElementById('fechaSalida').value,
        fechaEntrada: document.getElementById('fechaIngreso').value,
        cantidadHuespedes: document.getElementById('cantidadHuespedes').value
    };
    
  //document.getElementById("demo").innerHTML = txt;
    console.log(resultados);
    event.preventDefault();
    document.getElementById("datosFinales1").innerHTML = "Nombre: "+resultados.nombre;
    document.getElementById("datosFinales2").innerHTML = "Nombre: "+resultados.inputCorreo;
    document.getElementById("datosFinales3").innerHTML = "Nombre: "+resultados.inputAlojamiento;
    document.getElementById("datosFinales4").innerHTML = "Nombre: "+resultados.fechaSalida;
    document.getElementById("datosFinales5").innerHTML = "Nombre: "+resultados.fechaIngreso;
    document.getElementById("datosFinales6").innerHTML = "Nombre: "+resultados.cantidadHuespedes;
}

