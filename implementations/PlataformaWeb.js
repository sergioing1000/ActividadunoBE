class PlataformaWeb {
  mostrar(titulo, mensaje, tipo) {
    return {
      plataforma: "web",
      tipo,
      titulo,
      mensaje,
      estilo: "modal web",
    };
  }
}

module.exports = PlataformaWeb;
