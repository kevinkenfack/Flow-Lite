import Sequelize from 'sequelize';
import 'dotenv/config'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DATABASE_URL
});

export default sequelize;