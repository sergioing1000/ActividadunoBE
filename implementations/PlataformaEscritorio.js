class PlataformaEscritorio {
  mostrar(titulo, mensaje, tipo) {
    return {
      plataforma: "escritorio",
      tipo,
      titulo,
      mensaje,
      estilo: "popup escritorio",
    };
  }
}

module.exports = PlataformaEscritorio;
