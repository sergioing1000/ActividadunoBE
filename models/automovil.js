class Automovil {
  constructor(builder) {
    this.motor = builder.motor;
    this.color = builder.color;
    this.llantas = builder.llantas;
    this.sistemaSonido = builder.sistemaSonido;
    this.interiores = builder.interiores;
    this.techoSolar = builder.techoSolar;
    this.gps = builder.gps;

    this.precioBase = 20000;
    this.precio = this.calcularPrecio();

    Object.freeze(this);
  }

  calcularPrecio() {
    let total = this.precioBase;

    const preciosMotor = {
      "V6": 6000,
      "V8": 8000,
      "4 en Linea": 4500,
      "6 en Linea": 5000,
      "electrico": 8500
    };

    const tipoMotor = this.motor;

    if (preciosMotor[tipoMotor]) {
      total += preciosMotor[tipoMotor];
    }

    const preciosColor = {
      rojo: 500,
      azul: 500,
      verde: 500,
      amarillo: 500,
      naranja: 500,
      morado: 500,
      rosado: 500,
      negro: 500,
      dorado: 550,
      gris: 550,
    };

    const tipoColor = this.color;

    if (preciosColor[tipoColor]) {
      total += preciosColor[tipoColor];
    }

    const preciosLlantas = {
      AllSeason: 650,
      "Todo Terreno": 1100,
      Deportivas: 1800
    };

    const tipoLlantas = this.llantas;

    if (preciosLlantas[tipoLlantas]) {
      total += preciosLlantas[tipoLlantas];
    }

    const preciosSistemaSonido = {
      Bose: 900,
      "Harman Kardon": 1100,
      JBL: 850,
      Alpine: 800,
      Kenwood: 600,
      Pioneer: 700,
      Infinity: 500,
    };

    const tipoSistemaSonido = this.sistemaSonido;

    if (preciosSistemaSonido[tipoSistemaSonido]) {
      total += preciosSistemaSonido[tipoSistemaSonido];
    }

    const preciosInteriores = {
      Cuero: 1800,
      "Tela de lujo": 900,
      Gamuza: 1200,
      Alcantara: 1500,
    };

    const tipoInteriores = this.interiores;

    if (preciosInteriores[tipoInteriores]) {
      total += preciosInteriores[tipoInteriores];
    }

    if (this.techoSolar) total += 2000;
    if (this.gps) total += 660;

    return total;
  }
}

module.exports = Automovil;