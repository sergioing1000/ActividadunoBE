const PlataformaWeb = require("../implementations/PlataformaWeb.js");
const PlataformaMovil = require("../implementations/PlataformaMovil.js");
const PlataformaEscritorio = require("../implementations/PlataformaEscritorio.js");

class PlataformaFactory {
  static crear(plataforma) {
    switch (plataforma.toLowerCase()) {
      case "web":
        return new PlataformaWeb();
      case "movil":
        return new PlataformaMovil();
      case "escritorio":
        return new PlataformaEscritorio();
      default:
        throw new Error("Plataforma no soportada");
    }
  }
}

module.exports = PlataformaFactory;
