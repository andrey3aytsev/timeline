import { sequelize } from './index';
import { Model, DataTypes } from 'sequelize';

class PeriodsModel extends Model {
  public declare id: string;
  public name: string;
  public description: string;
  public start_date: string;
  public end_date: string;
}

PeriodsModel.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
  },
  {
    sequelize,
    tableName: 'periods',
    timestamps: false,
  }
);

export { PeriodsModel };
