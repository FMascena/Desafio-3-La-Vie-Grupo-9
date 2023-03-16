const express = require("express");
const atendimentosController = require("../controllers/atendimentosController");
const authController = require("../controllers/authController");
const loginValidator = require("../validators/psicologos/loginValidator");
const idValidator = require("../validators/id/idValidator");
const auth = require("../middlewares/auth");


const routes = express.Router();


routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", idValidator, atendimentosController.buscarIdAtendimentos);
routes.post("/atendimentos", auth, atendimentosController.cadastrarAtendimentos);


module.exports = routes;