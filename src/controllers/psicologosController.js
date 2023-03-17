const { Atendimentos, Psicologos, Pacientes } = require("../models");

global.psicologosController = []

export const cadastrarPsicologos = async (req, res) => {
    const { id, nome, email, senha, apresentacao, } = req.body

    const psicologo = await cadastrarPsicologos(id, nome, email, senha, apresentacao)

    res.status(201).json(psicologo);
}


export const buscarIdPsicologos = async (req, res) => {
    const { id } = req.params

    const psicologo = await buscarIdPsicologos(id)

    if (!psicologo) {
        return res.status(404).json({ message: 'Id não encontrado' })
    }

    return res.status(200).json({ psicologo });
}


export const listarPsicologos = (req, res) => {
    const psicologosController = global.psicologosController
    return res.status(200).json({ user: global.psicologosController })
}




export const atualizarPsicologos = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;

    const psicologo = await atualizarPsicologos(id, nome, email, senha, apresentacao)

    if (!psicologo) {
        return res.status(404).json({ mensagem: 'Id não encontrado' });

    }
}


export const deletarPsicologos = async (req, res) => {
    const { id } = req.params;

    await deletarPsicologos(id)

    if (!psicologo) {
        return res.status(404).json({ mensagem: 'Id não encontrado' });
    }
}


module.exports = psicologosController;


