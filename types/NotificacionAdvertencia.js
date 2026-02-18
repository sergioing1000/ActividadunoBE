const Notificacion = require("../abstractions/Notificacion.js");

class NotificacionAdvertencia extends Notificacion {
  enviar(titulo, mensaje) {
    return this.plataforma.mostrar(titulo, mensaje, "advertencia");
  }
}

module.exports = NotificacionAdvertencia;
