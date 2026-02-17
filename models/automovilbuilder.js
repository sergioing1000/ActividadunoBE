const Automovil = require("./automovil.js");

class AutomovilBuilder {
  constructor(motor) {
    if (!motor) {
      throw new Error("El motor es obligatorio");
    }

    this.motor = motor;

    // valores por defecto
    this.color = "Blanco por defecto";
    this.llantas = "Estándar por defecto";
    this.sistemaSonido = "Básico por defecto";
    this.interiores = "Tela por defecto";
    this.techoSolar = false;
    this.gps = false;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setLlantas(llantas) {
    this.llantas = llantas;
    return this;
  }

  setSistemaSonido(sistemaSonido) {
    this.sistemaSonido = sistemaSonido;
    return this;
  }

  setInteriores(interiores) {
    this.interiores = interiores;
    return this;
  }

  conTechoSolar() {
    this.techoSolar = true;
    return this;
  }

  conGPS() {
    this.gps = true;
    return this;
  }

  build() {
    return new Automovil(this);
  }
}

module.exports = AutomovilBuilder;
