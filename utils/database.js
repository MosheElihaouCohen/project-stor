const Sequelize = require('sequelize');
const config = require('../config/config.json');
const env = process.env.ENV || config.development;
const envDataObject = config[env];

const {password,username,Database} = config[env];

const  sequelize = new Sequelize(Database, username,password,config[env]);

module.exports ={
   sequelize
}