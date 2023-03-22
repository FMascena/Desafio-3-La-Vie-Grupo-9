const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos = db.define(
    "Psicologos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email:  {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
        apresentacao: {
            type: DataTypes.TEXT,
        },
    },
    {
        tableName: "psicologos",
        timestamps: false,
    }
);


module.exports = Psicologos;
