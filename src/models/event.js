import { dbConnection } from '../sequelize_db';

const Sequelize = require('sequelize');
export class Event extends Sequelize.Model {

}
Event.init({
    projectToken: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
    userId: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
    deviceId: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
    eventName: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
    parameters: { type: Sequelize.JSONB, allowNull: true, defaultValue: null },
    happenedAt: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
}, {
    sequelize: dbConnection,
    modelName: 'event',
});
Event.Helpers = {
    hasDraft: () => { return false; },
    public: (doc) => {
        if (doc.dataValues)
            doc = doc.dataValues;
        return doc;
    },
}