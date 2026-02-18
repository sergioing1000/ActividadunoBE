const Notificacion = require("../abstractions/Notificacion.js");

class NotificacionConfirmacion extends Notificacion {
  enviar(titulo, mensaje) {
    return this.plataforma.mostrar(titulo, mensaje, "confirmacion");
  }
}

module.exports = NotificacionConfirmacion;
