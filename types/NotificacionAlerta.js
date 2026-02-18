const Notificacion = require("../abstractions/Notificacion.js");

class NotificacionAlerta extends Notificacion {
  enviar(titulo, mensaje) {
    return this.plataforma.mostrar(titulo, mensaje, "alerta");
  }
}

module.exports = NotificacionAlerta;
