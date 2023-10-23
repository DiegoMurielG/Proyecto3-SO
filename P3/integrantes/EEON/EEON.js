const img1 = document.getElementById("imgCarrousel1"),
btnIzq1 = document.getElementById("btnIzq1"),
btnDer1 = document.getElementById("btnDer1"),
descripcion1 = document.getElementById("descripcionImg1"),
listaImgsYo = ["tocandoMusica.jpg", "videojuegos.jpg", "viajando.jpg"],
listaDescripcionesYo = ["Yo tocando música.<br>Me gusta tocar música así como bailarla. Es algo que hago desde pequeño y me ayuda a manejar mi estrés y en las fiestas es bastante útil para socializar. Actualmente me gusta tocar la guitarra y cantar con mis amigos.", "Yo jugando videojuegos.<br>Uno de mis pasatiempos es jugar videojuegos principalmente de rol. Desde que tuve mi primer pc gamer me la he vivido emulando y jugando todos los juegos que me llamen la atención a veces con buenas experiencias a veces con malas.", "Yo viajando.<br>La vida me ha dado la oportunidad de conocer varios lugares. Y la idea de como somos parte de un todo y convivimos en este mundo que es tan grande y a la vez tan pequeño se me hace algo bastante lindo."],
img2 = document.getElementById("imgCarrousel2"),
btnIzq2 = document.getElementById("btnIzq2"),
btnDer2 = document.getElementById("btnDer2"),
descripcion2 = document.getElementById("descripcionImg2"),
listaImgsIntereses = ["anime.jpg", "programar.png", "ofertas.jpg"],
listaDescripcionesIntereses = ['Anime o Animación en general.<br> Soy un apasionado de los dibujitos, desde caricaturas por grandes cadenas, animación independiente, estudios pequeños. Nunca pierdo la oportunidad de conocer un nuevo estilo de animación o algún proyecto de animación. Es lindo ver como las personas van mejorando en lo que hacen hasta tener proyectos grandísimos. O como un episodio piloto da a luz un mundo maravilloso que nos entretiene durante años.', "Programar.<br>En esta vida no hay nada que me halla llamado más la atención que programar cosas. Por eso me metí a esta carrera y ha sido un gran aprendizaje día tras día. Espero algún día poder vivir de ello.", "Ofertas.<br>Al ser alguien que compra mucho por internet estoy siempre al tanto del precio de varios productos y no dejo perder la oportunidad de ahorrar un par de miles en algo que me interesa comprar."];

var cantImgs = listaImgsYo.length,
url = "../../assets/media/img/",
imgActual = 0

if(cantImgs != listaDescripcionesYo.length){
    alert("Tienes más imgs o descripciones, deben de ser del mismo tamaño")
    console.log("Tienes más imgs o descripciones, deben de ser del mismo tamaño")
}

function recorrerIndices(indice){
    if(indice > cantImgs-1){
        indice = 0
        return indice
    }else if(indice < 0){
        indice = cantImgs-1
        return indice
    }
    return indice
}

function cambiarImgConBtn(/*btn, */img, descripcion, listaImgs, listaDescripciones){
    // Cambia la imagen y descripción con la acción del boton dado del carousel dado
    //if(btn.getAttribute("id") == )
    img.style.backgroundImage = "url("+url+listaImgs[imgActual]+")"
    descripcion.innerHTML = listaDescripciones[imgActual]
}

function cargarImg(btn, atributos){
    // console.log('atributos: '+ atributos)
    if(btn.getAttribute("id-btn") == "izquierdo"){
        imgActual = recorrerIndices(imgActual-1)
        cambiarImgConBtn(/*btn, */atributos[0], atributos[1], atributos[2], atributos[3])
    }else{
        imgActual = recorrerIndices(imgActual+1)
        cambiarImgConBtn(/*btn, */atributos[0], atributos[1], atributos[2], atributos[3])
        // img1.style.backgroundImage = "url("+url+listaImgsYo[imgActual]+")"
        // descripcion.innerHTML = listaDescripcionesYo[imgActual]
    }
}

function asignarCarrousel(btn){
    // Asigna los elementos correspondientes al carrousel que cada botón modifica
    var idBtn = btn.getAttribute("id");
    let atributos = [];
    if(idBtn.slice(-1) == "1"){
        // Tomando el último caracter del id sabremos a que carrpusel pertenece el boton
        // En este caso pertenece al primer carrousel
        atributos = [img1, descripcion1, listaImgsYo, listaDescripcionesYo];
        
    }else{
        // Pertenece al segundo Carrousel
        atributos = [img2, descripcion2, listaImgsIntereses, listaDescripcionesIntereses];
    }
    console.log('idBtn.slice(-1): ' + idBtn.slice(-1));
    console.log('atributos: '+ atributos);
    cargarImg(btn, atributos);
}


btnIzq1.addEventListener('click', function(event){asignarCarrousel(this)}, false)
btnDer1.addEventListener('click', function(event){asignarCarrousel(this)}, false)

btnIzq2.addEventListener('click', function(event){asignarCarrousel(this)}, false)
btnDer2.addEventListener('click', function(event){asignarCarrousel(this)}, false)

asignarCarrousel(btnIzq1);
asignarCarrousel(btnIzq2)