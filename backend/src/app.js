import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
// importemos una sola ruta
import router from "./routes/index.js";

// Variables de entorno
dotenv.config();

// Configurar la app
const app = express();
const httpServer = http.createServer(app);
// Leer datos via body
app.use(express.json());

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

if (process.argv[2] === "--postman") {
  whitelist.push(undefined);
}

const corsOptions = {
  // origin: function(origin, callback) {
  //     if(whitelist.includes(origin)) {
  //         // Permite la conexión
  //         callback(null, true)
  //     } else {
  //         // No permitir la conexión
  //         callback(new Error('Error de CORS'))
  //     }
  // }

  origin: "*",
};

app.use(cors(corsOptions));

// usar rutas
app.use("/", router);
// app.use('/api/services', servicesRoutes)
// app.use('/api/auth', authRoutes)
// app.use('/api/appointments', appointmentRoutes)
// app.use('/api/users', userRoutes)

// exportamos el servidor
export default httpServer;
