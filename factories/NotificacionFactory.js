const NotificacionMensaje = require("../types/NotificacionMensaje.js");
const NotificacionAlerta = require("../types/NotificacionAlerta.js");
const NotificacionAdvertencia = require("../types/NotificacionAdvertencia.js");
const NotificacionConfirmacion = require("../types/NotificacionConfirmacion.js");

class NotificacionFactory {
  static crear(tipo, plataforma) {
    switch (tipo.toLowerCase()) {
      case "mensaje":
        return new NotificacionMensaje(plataforma);
      case "alerta":
        return new NotificacionAlerta(plataforma);
      case "advertencia":
        return new NotificacionAdvertencia(plataforma);
      case "confirmacion":
        return new NotificacionConfirmacion(plataforma);
      default:
        throw new Error("Tipo de notificación no soportado");
    }
  }
}

module.exports = NotificacionFactory;
