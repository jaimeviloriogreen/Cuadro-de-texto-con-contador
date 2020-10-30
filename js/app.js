'use strict'

const cajaTexto = document.querySelector('.cajaTexto');
const expReg = /\s/gim;
const contador = document.querySelector('.contador');
const boton = document.querySelector('.boton');

const calcularPalabras = ()=>{
    let palabras = cajaTexto.value;
        palabras = palabras.replace(expReg, "");

        contador.innerHTML = `<p>${palabras.length}</p>`;

        if(palabras.length >= 20 && palabras.length <= 25){
            contador.classList.remove('cajaBlanca');
            contador.classList.remove('limite');
            contador.classList.add('advertencia');
            boton.removeAttribute('disabled');
            boton.classList.remove('inactivo');
            boton.classList.add('activo');
        }else if(palabras.length > 25 && palabras.length < 30){
            contador.classList.remove('advertencia');
            contador.classList.remove('exceder');
            contador.classList.remove('cajaBlanca');
            contador.classList.add('limite');
            boton.removeAttribute('disabled');
            boton.classList.remove('inactivo');
            boton.classList.add('activo');
        }else if(palabras.length >= 30){
            contador.classList.remove('cajaBlanca');
            contador.classList.remove('advertencia');
            contador.classList.remove('limite');
            contador.classList.add('exceder');
            boton.setAttribute('disabled', 'disabled');
            boton.classList.remove('activo');
            boton.classList.add('inactivo');
            console.log('No más de 30 carácteres!');
        }else{
            contador.classList.remove('advertencia');
            contador.classList.remove('limite');
            contador.classList.remove('exceder');
            contador.classList.add('cajaBlanca');
            boton.removeAttribute('disabled');
            boton.classList.remove('inactivo');
            boton.classList.add('activo');

        }
    
}

export{cajaTexto, calcularPalabras}