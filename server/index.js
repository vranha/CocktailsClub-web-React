const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const connect = require("./database/connection");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// Routes
const authRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");
const orderRoute = require("./routes/order.routes");
const bookingRoute = require("./routes/booking.routes");

const nodemailer = require("nodemailer");
const { patch } = require("./routes/user.routes");

connect();

require("dotenv").config();

const PORT = process.env.PORT;

const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// server.use(express.static(path.join(__dirname, 'public')));

require("./authentication/passport");

// server.options("*", cors());
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

server.use(
  session({
    secret: "Project final - Upgrade",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: false,
      secure: false,
      sameSite: false,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

server.use(passport.initialize()); //inicializamos passport si no Error
server.use(passport.session());

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Unexpected error";

  return res.status(status).json(message);
});

server.use("/auth", authRoute); //Ruta auth añadida para la authentication
server.use("/product", productRoute);
server.use("/order", orderRoute);
server.use("/booking", bookingRoute);

server.listen(PORT, () => {
  console.log(`Server running in http://127.0.0.1:${PORT}`);
});

// Enviamos email mediante MAILTRAP (mailtrap es mas para tests, para producción habria que cambiar por otra)
server.post("/send_mail", cors(), async (req, res) => {
  let { text, name, email, phone } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  await transport.sendMail({
    from: `${email}`,
    to: "CocktailsClub@gmail.com",
    subject: "CocktailsClub Contact Form",
    html: `<div className={styles.email} style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <p>💌Mensaje de <strong>${name}</strong>, con email: <strong>${email}</strong> </p>
    <p>📞Telefono de contacto: <strong>${
      phone || "No nos lo da, es una persona reservada"
    }</strong></p>

    <h3>Mensaje:</h3>
    <p>${text}</p>

    <p>A sus pies, señores cockteleros.</p>
    <p>${name}😘</p>
    </div>
    `,
  });
  console.log("Mensaje enviado");
});


server.post("/booking_mail", cors(), async (req, res) => {
  let { date, userMail, emailMail, hour } = req.body;
  const transport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "urioleh@gmail.com",
      pass: "wkvttjqwcvlhqnrv",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  await transport.sendMail({
    from: `urioleh@gmail.com`,
    to: `${emailMail}`,
    subject: "CocktailsClub Email confirmation",
    html: `<div style="
    border: 1px solid #6f2232;
    background-color: #1a1a1d;
    color: white;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <h3>💌Querido/a <strong>${userMail}</strong></h3>

    <h4>Confirmamos su reserva para el dia <strong style=" color: #6f2232; ">${date}</strong> a las <strong style=" color: #6f2232; ">${hour}</strong> horas </h4>
    <p>Si desea anular su reserva hágalo en la seccion "Mis reservas" de nuestra web</p>

    <p>Hasta entonces!</p>
    <h4>Cocktails Club</h4>
    </div>
    `,
  });
  console.log("Confirmación de bookings enviada");
});
