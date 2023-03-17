const express = require("express");
const atendimentosController = require("../controllers/atendimentosController");
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const loginValidator = require("../validators/psicologos/loginValidator");
const idValidator = require("../validators/id/idValidator");
const auth = require("../middlewares/auth");
const psicologosController = require("../controllers/psicologosController");
const dashboardsController = require("../controllers/dashboardsController");

const routes = express.Router();


routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", idValidator, atendimentosController.buscarIdAtendimentos);
routes.post("/atendimentos", auth, atendimentosController.cadastrarAtendimentos);

routes.get("/pacientes", pacientesController.listarPacientes);  //Ainda vou criar as funções
routes.get("/pacientes/:id", idValidator, pacientesController.buscarIdPacientes);
routes.post("/pacientes", pacientesController.cadastrarPacientes);
routes.put("/pacientes/:id", idValidator, pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id", idValidator, pacientesController.deletarPacientes);

routes.get("/psicologos", psicologosController.listarPsicologos); 
routes.get("/psicologos/:id", idValidator, psicologosController.buscarIdPsicologos);
routes.post("/psicologos", auth, psicologosController.cadastrarPsicologos);
routes.put("/psicologos/:id", idValidator, psicologosController.atualizarPsicologos);
routes.delete("/psicologos/:id", idValidator, psicologosController.deletarPsicologos);

routes.get("/dashboards/psicologos", dashboardsController.listarPsicologos);
routes.get("/dashboards/pacientes", dashboardsController.listarPacientes);
routes.get("/dashboards/atendimentos", dashboardsController.listarAtendimentos);
routes.get("/dashboards/media-atendimentos", dashboardsController.mediaAtendimentos);

module.exports = routes;