import { sequelize } from './index';
import { Model, DataTypes } from 'sequelize';

class EventsModel extends Model {
  public id: string;
  public description: string;
  public start_date: string;
  public end_date: string;
}

EventsModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    description: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE }
  },
  {
    sequelize,
    tableName: 'events',
    timestamps: false,
  }
);

EventsModel.sync()
  .then(() => console.log('EventsModel has been synchronized successfully.'))
  .catch((err) => console.error('Unable to sync EventsModel:', err));

export { EventsModel };
