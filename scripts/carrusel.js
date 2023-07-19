// const btnLeft = document.querySelector(".btn-left"),
//       btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider"),
      containerHero = document.querySelectorAll(".container-hero");


const punto = document.querySelectorAll('.punto');
// btnLeft.addEventListener("click", e => moveToLeft())
// btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / containerHero.length;

function moveToRight() {
    if (counter >= containerHero.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = containerHero.length-1;
        operacion = widthImg * (containerHero.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}   

punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener('click', ()=>{
        let posicion = i;
        let operacion = posicion*(operacion-widthImg);
        slider.style.transform = `translateX(-${operacion}%)`;
        // grande2.style.transform = `translateX(${operacion}%)`;
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})