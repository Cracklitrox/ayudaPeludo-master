  $("#form").validate({
    rules:{
        nombre: {
            required: true,
            minlength: 4,
            maxlenght: 30
        },
        apellido: {
            required: true,
            minlength: 4,
            maxlenght: 30
        },
        correo:{
            required: true,
            correo: true
        },
        telefono: {
            required: true   
        },
        genero:{
            required: true
        },
        ciudad:{
            required: true
        },
        Comentario:{
            required: true
        }
    }
  })
  $("#enviar").click(function(){
    if($("#form").valid() == false ){
        return;
    }
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let correo = $("#correo").val()
    let telefono = $("#telefono").val()
    let genero = $("#genero").val()
    let ciudad = $("#ciudad").val()
    let comentario = $("#Comentario").val()
  })