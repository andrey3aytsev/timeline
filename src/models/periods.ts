import { sequelize } from './index';
import { Model, DataTypes } from 'sequelize';

class PeriodsModel extends Model {
  public id: string;
  public name: string;
  public descriptions: string;
  public start_date: string;
  public end_date: string;
}

PeriodsModel.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true },
    name: { type: DataTypes.STRING },
    descriptions: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
  },
  {
    sequelize,
    tableName: 'periods',
    timestamps: false,
  }
);

PeriodsModel.sync()
  .then(() => console.log('PeriodsModel has been synchronized successfully.'))
  .catch((err) => console.error('Unable to sync PeriodsModel:', err));

export { PeriodsModel };
