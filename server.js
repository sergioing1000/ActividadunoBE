
const express = require("express");
const cors = require("cors");

const AutomovilBuilder = require("./models/automovilbuilder.js");

const PlataformaFactory = require("./factories/PlataformaFactory.js");
const NotificacionFactory = require("./factories/NotificacionFactory.js");


const ChatRoomMediator = require("./domain/ChatRoomMediator.js");
const User = require("./domain/User.js");
const ChatService = require("./application/ChatService.js");
const createChatRouter = require("./infrastructure/ChatController.js");

const app = express();

app.use(
  cors({
    origin: "https://aesthetic-profiterole-b23211.netlify.app",
  }),
);

app.use(express.json());

const mediator = new ChatRoomMediator();
const chatService = new ChatService(mediator, User);

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

app.post("/api/notificaciones", (req, res) => {
  try {
    const { tipo, plataforma, titulo, mensaje } = req.body;

    const plataformaObj = PlataformaFactory.crear(plataforma);
    const notificacion = NotificacionFactory.crear(tipo, plataformaObj);

    const resultado = notificacion.enviar(titulo, mensaje);

    res.status(200).json({
      success: true,
      data: resultado,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

app.use("/api/chat", createChatRouter(chatService));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
