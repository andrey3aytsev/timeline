import { sequelize } from './index';
import { Model, DataTypes } from 'sequelize';

class TagsModel extends Model {
  public declare id: string;
  public name: string;
  public description: string;
}

TagsModel.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  },
  {
    sequelize,
    tableName: 'tags',
    timestamps: false,
  }
);

export { TagsModel };
