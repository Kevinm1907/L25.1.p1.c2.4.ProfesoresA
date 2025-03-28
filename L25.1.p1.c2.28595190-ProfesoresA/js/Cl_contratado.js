import Cl_profesor from "./Cl_profesor.js"
export default class Cl_contratado extends Cl_profesor{
    constructor(nombre, bono, horasExtra) {
        super(nombre, bono);
        this.horasExtra = horasExtra;
    }
    calcularIngresoTotal() {
        return this.bono + this.horasExtra * 10;
    }
}