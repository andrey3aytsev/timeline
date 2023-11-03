import { Sequelize } from 'sequelize';
import { ENV } from '../env';

const sequelize = new Sequelize(ENV.dbName, ENV.dbUser, ENV.dbUserPassword, {
  dialect: 'postgres',
  host: ENV.dbHost,
  port: ENV.dbPort,
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully..');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export { sequelize };
