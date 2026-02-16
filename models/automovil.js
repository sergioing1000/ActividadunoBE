class Automovil {
  constructor(builder) {
    this.motor = builder.motor;
    this.color = builder.color;
    this.llantas = builder.llantas;
    this.sistemaSonido = builder.sistemaSonido;
    this.interiores = builder.interiores;
    this.techoSolar = builder.techoSolar;
    this.gps = builder.gps;

    // Hace el objeto inmutable
    Object.freeze(this);
  }
}

module.exports = Automovil;