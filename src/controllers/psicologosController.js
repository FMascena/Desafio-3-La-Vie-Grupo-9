const { Psicologos, Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");

const psicologosController = {

    async cadastrarPsicologos (req, res) {
        try {
            const { nome, email, senha, apresentacao } = req.body;
            const novaSenha = bcrypt.hashSync(senha, 10);
            const novoPsicologo = await Psicologos.create({ nome, email, senha: novaSenha, apresentacao, });
            res.status(201).json(novoPsicologo);
        }
        catch (error) {
            console.error(error)
        }
    },

    async listarPsicologos (req, res) {
        try {
            const listaDosPsicologos = await Psicologos.findAll({
                include: {
                    model: Atendimentos,
                }
            });
            res.status(200).json(listaDosPsicologos);
        }
        catch (error) {
            res.json("Não foi possível listar os devidos psicólogos");
            console.error(error);
        }
    },

    async buscarIdPsicologos (req, res) {
        try {
            const { id } = req.params;
            const psicologoID = await Psicologos.findByPk(id);
            if (!psicologoID) {
                res.status(404).json("Id não encontrado");
            }
            res.status(200).json(psicologoID);
        }
        catch (error) {
            res.status(500).json("Não foi possível listar este psicólogo por este ID");
        }
    },

    async deletarPsicologos (req, res) {
        try {
            const { id } = req.params;
            const psicologoID = await Psicologos.findByPk(id, {
                include: {
                    model: Atendimentos,
                }
            });
            if (!psicologoID) {
                return res.status(404).json("Id não encontrado");}
            if(psicologoID.atendimentos.length === 0) {
                await Psicologos.destroy({
                    where: {
                    id,
                    },
                });
                res.sendStatus(204);
            }
            else {
                res.status(401).json('Cadastro de psicólogo não pode ser deletado pois possui atendimentos agendados.');
            } 
        }
        catch (error) {
                console.error(error);
        }
    },

    async atualizarPsicologos (req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentacao } = req.body;
            const novaSenha = bcrypt.hashSync(senha, 10);
            const psicologoID = await Psicologos.findByPk(id);
            if (!psicologoID) {
                res.status(404).json("Id não encontrado");
            }
            else {
            await Psicologos.update({ nome, email, senha: novaSenha, apresentacao, },
            {
                where: {
                id,
                },
            });
            res.status(200).json(psicologoID)
            }
        }
        catch (error) {
        res.status(400).json("Não foi possível atualizar o psicólogo");
        }
    },

    countPsicologos: async (req, res) => {
        try {
          const psicologos = await Psicologos.count();
          res.json(`${psicologos} psicologos`);
        } catch (error) {
          console.error(error);
        }
      }  
};

module.exports = psicologosController