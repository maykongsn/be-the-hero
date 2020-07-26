import Sequelize, { Model } from 'sequelize';
import crypto from 'crypto';

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (ong) => {
      ong.id = crypto.randomBytes(4).toString('HEX');
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Incident, { foreignKey: 'ong_id', as: 'ong' });
  }
}

export default Ong;
