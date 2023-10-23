const tarjetas = document.getElementById("containerTarjeta"),
integrantes = document.querySelectorAll(".integrante");
bgImgsIntegrantes = ["retrato.jpg", "retratoDiego.jpg", "retratoRamon.jpg"],
bgImgsBg = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];

// tarjetas.addEventListener("mouseenter", (_) => {
//     console.log("Eligiendo una tarjeta");
// }, false);

function cambiarImagenIntegrante(integrante, index){
    
    index = integrante.querySelectorAll(".nombreIntegrante")[0].getAttribute("id").slice(-1) - 1;
    // console.log('index: ' + index)
    body.style.backgroundImage = "url( ./assets/media/img/"+bgImgsBg[index]+")";
    body.style.backdropFilter = "blur(7.5px)";
    body.style["-webkit-backdrop-filter"] = "blur(7.5px)";

    // console.log('bgImgs[index]:'+ bgImgs[index])
    integrante.style.backgroundImage = "url( ./assets/media/img/"+bgImgsIntegrantes[index]+")";
    integrante.style.backdropFilter = "blur(7.5px)";
    integrante.style["-webkit-backdrop-filter"] = "blur(7.5px)";
}

tarjetas.addEventListener("mouseleave", (_) => {
    body.style.backgroundImage = "url( ./assets/media/img/dummybg.png )";
    body.style.fackdropFilter = "blur( 0px )";
    body.style["-webkit-backdrop-filter"] = "blur( 0px )";
}, false);

// Explicación sobre porque si asignamos directamente el eventListener al
// integrante i, este se aplica al 1ro, luego le llega el 2ndo elemento
// y se reasigna al 2ndo abandonando el 1ro, y así hasta que llegua al último
// elemento y este es ul único que tiene el eventLitener.
// Se usa "JS discreto"
// 
// https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values
var i = 0;
integrantes.forEach( (integrante) =>{
    (function () {
        // console.log(integrantes[i]);
        // console.log(bgImgs[i]);
        integrante.addEventListener("mouseenter", function(){cambiarImagenIntegrante(integrante, i);})
    }());
    i++;
});

// // This handler will be executed every time the cursor
// // is moved over a different div
// ex1.addEventListener("mouseenter", (_) => {
//     // change the bg img when the mouseenter div
//     body.style.backgroundImage = "url( ../assets/media/img/dummy.jpg )";
//     body.style.backdropFilter = "blur(7.5px)";
//     body.style["-webkit-backdrop-filter"] = "blur(7.5px)";
// }, false);

// ex2.addEventListener("mouseover", (_) => {
//     body.style.backgroundImage = "url( ../media/images/siembraEnFamiliaFondo.jpg )";
//     body.style.backdropFilter = "blur(7.5px)";
//     body.style["-webkit-backdrop-filter"] = "blur(7.5px)";
// }, false);

// ex3.addEventListener("mouseover", (_) => {
//     body.style.backgroundImage = "url( ../media/images/cinemaChinampa.jpg )";
//     body.style.backdropFilter = "blur(7.5px)";
//     body.style["-webkit-backdrop-filter"] = "blur(7.5px)";
// }, false);

// ex4.addEventListener("mouseover", (_) => {
//     body.style.backgroundImage = "url( ../media/images/mezcalizaFondo.jpg )";
//     body.style.backdropFilter = "blur(7.5px)";
//     body.style["-webkit-backdrop-filter"] = "blur(7.5px)";
// }, false);

// ex5.addEventListener("mouseover", (_) => {
//     body.style.backgroundImage = "url( ../media/images/creaTuEventoExperienciasFondo.jpg )";
//     body.style.backdropFilter = "blur(7.5px)";
//     body.style["-webkit-backdrop-filter"] = "blur(7.5px)";
// }, false);