'use strict'
import * as app from '/js/app.js';

app.cajaTexto.addEventListener('keyup', app.calcularPalabras);
document.addEventListener('DOMContentLoaded', app.calcularPalabras);

