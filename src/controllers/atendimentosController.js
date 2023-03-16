const { Atendimentos, Psicologos, Pacientes } = require("../models");

const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const { page = 1, limit = 20 } = req.query;
      const offset = parseInt(limit) * (parseInt(page) - 1);

      const filter = {
        limit: parseInt(limit),
        offset
      };

      const listarAtendimentos = await Atendimentos.findAll({
        include: [Pacientes, Psicologos],
      }, filter);

      return res.status(200).json(listarAtendimentos);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json("Não foi possível listar os dados");
    };
  },

  async buscarIdAtendimentos(req, res) {
    try {
      const { id } = req.params;
      const buscarId = await Atendimentos.findByPk(id, {
        include: [Pacientes, Psicologos],
      });

      if (!buscarId) {
        return res.status(400).json("Id não encontrado!");
      }

      return res.status(200).json(buscarId);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json("Não foi possível listar os dados");
    };
  },

  async cadastrarAtendimentos(req, res) {
    try {
      const { paciente_id, data_atendimento, observacao } = req.body;

      if (!paciente_id || !data_atendimento || !observacao) {
        return res.status(400).json("Preencha todos os campos corretamente");
      };

      const existsPaciente = await Pacientes.count({
        where: {
          id: paciente_id,
        },
      });

      if (!existsPaciente) {
        return res.status(400).json("Id do paciente não encontrado!");
      };

      const novoAtendimento = await Atendimentos.create({
        psicologo_id: req.auth.id,
        paciente_id,
        data_atendimento,
        observacao,
      });

      return res.status(201).json(novoAtendimento);
    }
    catch (error) {
      console.log(error);
      return res.status(500).json("Erro interno no servidor!");
    }
  },
};

module.exports = atendimentosController;