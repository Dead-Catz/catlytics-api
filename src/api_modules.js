import { dbConnection } from './sequelize_db.js';
import { User } from './models/user.js';
import { Event } from './models/event.js';
const fs = require('fs');
const path = require('path');

export const API_MODULES = {
    dbConnection: dbConnection,
    User,
    Event,
    isValidProjectToken: (token) => {
        let validTokens = JSON.parse(fs.readFileSync('storage/project-tokens.json').toString());
        return validTokens.findIndex(t => t == token) != -1;
    },
};