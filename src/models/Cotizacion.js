const currency = require('currency.js')

class Cotizacion {
    //propiedades

    costoBase = 50
    pesoPaquete 
    distanciaKM
    cargoExtraLB = 0
    cargoExtraKM = 0
    costoTotal = 0
    fechaEntrega = new Date()

    // constructor
    constructor(pesoPaquete, distanciaKM) {
        this.pesoPaquete = pesoPaquete
        this.distanciaKM = distanciaKM
        this.fechaEntrega = new Date()
        this.costoBase = 50
        this.cargoExtraLB = 0
        this.cargoExtraKM = 0
        this.costoTotal = 0
    }
    // funciones
    saludo() {
        console.log(``)
        console.log(`Bienvenido a tu calculador de envio` .blue)
    }


    cargoLB() {

        if (this.pesoPaquete > 5) {
            this.cargoExtraLB = (this.pesoPaquete - 5) * 20

        }
        return this.cargoExtraLB
    }

    cargoKM() {
        if (this.distanciaKM > 50) {
            this.cargoExtraKM = (this.distanciaKM - 50) * 10

        }
        return this.cargoExtraKM
    }

    calcularEntrega() {
    this.diasEntrega = 2 + Math.ceil(this.distanciaKM / 100)

    const hoy = new Date()

    hoy.setDate(hoy.getDate() + this.diasEntrega)

    this.fechaEntrega = hoy

    return this.fechaEntrega
}

    total() {
        const HNL = value => currency(value, { symbol: "L", precision: 2 });

        this.cargoKM()
        this.cargoLB()
        this.calcularEntrega()

        this.costoTotal = this.costoBase + this.cargoExtraLB + this.cargoExtraKM
        console.log(`Costo Base: ${HNL(this.costoBase).format()}`)
        console.log(`Recargo por peso ${HNL(this.cargoExtraLB).format()}`)
        console.log(`Recargo por KM ${HNL(this.cargoExtraKM).format()}`)
        console.log(`Costo Total: ${HNL(this.costoTotal).format()}`.green)
        console.log(`Fecha de Entrega: ${this.fechaEntrega.toLocaleString()}`)
    }
}

module.exports = Cotizacion