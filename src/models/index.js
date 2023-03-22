const Atendimentos = require("./atendimentos");
const Pacientes = require("./pacientes");
const Psicologos = require("./psicologos");

Atendimentos.belongsTo(Pacientes, {
  foreignKey: "paciente_id",
});

Pacientes.hasMany(Atendimentos, {
  foreignKey: "paciente_id",
})

Atendimentos.belongsTo(Psicologos, {
  foreignKey: "psicologo_id",
});

Psicologos.hasMany(Atendimentos, {
  foreignKey: "psicologo_id",
});

module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos
};