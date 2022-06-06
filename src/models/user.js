import { dbConnection } from '../sequelize_db.js';
const Sequelize = require('sequelize');
export class User extends Sequelize.Model {
}
User.init({
    //user info:
    deviceId: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
    metaData: { type: Sequelize.JSONB, allowNull: false, defaultValue: {} },
}, {
    sequelize: dbConnection,
    modelName: 'user',
});
User.Helpers = {
    hasDraft: () => { return false; },
    public: (doc) => {
        if (doc.dataValues)
            doc = doc.dataValues;
        return doc;
    },
}