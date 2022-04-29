const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Cuando click en punto 
    // saber la posición del punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS los puntos activo
    // AÑADIR las clase activo al punto que hemos dado click
punto.forEach(( cadaPunto, i)=>{
    punto[i].addEventListener('click',()=>{

        let posición = i
        let operacion = posición * -50

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach(( cadaPunto, i)=>{
        punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
        //Hola
    })
})
