import { sequelize } from './index';
import { Model, DataTypes } from 'sequelize';

class TagsModel extends Model {
  public id: string;
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

TagsModel.sync()
  .then(() => console.log('TagsModel has been synchronized successfully.'))
  .catch((err) => console.error('Unable to sync TagsModel:', err));

export { TagsModel };
