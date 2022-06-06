import { dbConnection } from "./sequelize_db";
import { User } from "./models/user";
import { Event } from "./models/event";
const Sequelize = require('sequelize');
dbConnection
    .authenticate()
    .then(async () => {
        console.log('connected!');
        // await User.sync();
        // await Event.sync();
        const queryInterface = dbConnection.getQueryInterface();
        console.log('done');
    })
    .catch(err => {
        console.log(err);
    });
