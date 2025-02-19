import sequelize from '../config/database.js';
import Groups from '../models/groups.js';
import Flows from '../models/flows.js';

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.error('Unable to initialize the database:', error);
  } finally {
    await sequelize.close();
  }
};

initializeDatabase();