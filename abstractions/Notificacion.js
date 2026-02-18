class Notificacion {
  constructor(plataforma) {
    if (!plataforma) {
      throw new Error("Se requiere una plataforma");
    }
    this.plataforma = plataforma;
  }

  enviar(titulo, mensaje) {
    throw new Error("Método enviar() debe ser implementado");
  }
}

module.exports = Notificacion;
