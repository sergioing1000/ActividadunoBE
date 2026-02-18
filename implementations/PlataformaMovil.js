class PlataformaMovil {
  mostrar(titulo, mensaje, tipo) {
    return {
      plataforma: "movil",
      tipo,
      titulo,
      mensaje,
      estilo: "toast movil",
    };
  }
}

module.exports = PlataformaMovil;
