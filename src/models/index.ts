import { Sequelize } from 'sequelize';
import { ENV } from '../env';

const sequelize = new Sequelize(ENV.dbName, ENV.dbUser, ENV.dbUserPassword, {
  dialect: 'postgres',
  host: ENV.dbHost,
  port: ENV.dbPort,
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully..'))
  .catch((err) => console.error('Unable to connect to the database:', err));

export { sequelize };
