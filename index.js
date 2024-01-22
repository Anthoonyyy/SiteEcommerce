const slide = ["fashion womanresize.png", "fashion menresize.png"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide.length - 1;
    document.getElementById("slide").src = "sliders/" + slide[numero];
}
setInterval("ChangeSlide(1)", 3000);