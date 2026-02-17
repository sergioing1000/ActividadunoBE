
const express = require("express");
const cors = require("cors");

const AutomovilBuilder = require("./models/automovilbuilder.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.post("/automoviles", (req, res) => {
  try {
    const {
      motor,
      color,
      llantas,
      sistemaSonido,
      interiores,
      techoSolar,
      gps,
    } = req.body;

    const builder = new AutomovilBuilder(motor);

    if (color) builder.setColor(color);
    if (llantas) builder.setLlantas(llantas);
    if (sistemaSonido) builder.setSistemaSonido(sistemaSonido);
    if (interiores) builder.setInteriores(interiores);
    if (techoSolar) builder.conTechoSolar();
    if (gps) builder.conGPS();

    const automovil = builder.build();

    res.status(201).json({
      mensaje: "Automóvil creado exitosamente",
      data: automovil,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
