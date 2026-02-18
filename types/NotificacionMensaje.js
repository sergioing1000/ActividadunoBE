const Notificacion = require("../abstractions/Notificacion.js");

class NotificacionMensaje extends Notificacion {
  enviar(titulo, mensaje) {
    return this.plataforma.mostrar(titulo, mensaje, "mensaje");
  }
}

module.exports = NotificacionMensaje;
