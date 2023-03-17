const express = require("express");
const atendimentosController = require("../controllers/atendimentosController");
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const loginValidator = require("../validators/psicologos/loginValidator");
const idValidator = require("../validators/id/idValidator");
const auth = require("../middlewares/auth");


const routes = express.Router();


routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", idValidator, atendimentosController.buscarIdAtendimentos);
routes.post("/atendimentos", auth, atendimentosController.cadastrarAtendimentos);

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", idValidator, pacientesController.listarPacientesId);
routes.post("/pacientes", pacientesController.cadastrarPacientes);
routes.put("/pacientes/:id", idValidator, pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id", idValidator, pacientesController.deletarPacientes);


module.exports = routes;