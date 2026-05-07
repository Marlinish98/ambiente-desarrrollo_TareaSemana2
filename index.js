var colors = require('colors');

const Cotizacion = require('./src/models/Cotizacion')

let cotizacion = new Cotizacion(4,20)
let cotizacion2 = new Cotizacion(6,51)
let cotizacion3 = new Cotizacion(20,220)

cotizacion.saludo()
cotizacion.total()

cotizacion2.saludo()
cotizacion2.total()

cotizacion3.saludo()
cotizacion3.total()
