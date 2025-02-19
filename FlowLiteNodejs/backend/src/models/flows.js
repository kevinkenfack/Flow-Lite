import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Flows = sequelize.define('Flows', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    defaultValue: ""
  },
  group: {
    type: DataTypes.TEXT,
    defaultValue: ""
  },
  nodes: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  edges: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  },{
  timestamps: true,
  }
);

export default Flows