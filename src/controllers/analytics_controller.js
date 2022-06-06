import { API_MODULES } from '../api_modules';
import { isEmptyString } from '../utils/utils';
import { Controller } from './controller';
export class AnalyticsController extends Controller {
    constructor(socketEvents) {
        super(socketEvents);
        this.expressRouter.post('/submit-events', async (req, res) => {
            try {
                const projectToken = req.header('project-token');
                console.log(`projectToken=`,projectToken);
                if (!API_MODULES.isValidProjectToken(projectToken)) {
                    res.sendError('invalid project token', 403);
                    return;
                }
                let { events } = req.body;
                for (var i = 0; i < events.length; i++) {
                    delete events[i].id;
                    events[i].projectToken = projectToken;
                }
                let results = await API_MODULES.Event.bulkCreate(events);
                res.sendResponse(results);
            }
            catch (err) {
                res.sendError(err);
            }
        });
        this.expressRouter.post('/retrive-user', async (req, res) => {
            try {
                let { deviceId, metaData } = req.body;
                if (metaData == undefined) {
                    metaData = {};
                }
                if (isEmptyString(deviceId)) {
                    res.sendBadParameters();
                    return;
                }
                let user = await API_MODULES.User.findOne({
                    where: {
                        deviceId: deviceId,
                    }
                });
                if (user == undefined) {
                    user = API_MODULES.User.build({ deviceId, metaData });
                    await user.save();
                }
                res.sendResponse(user);
            }
            catch (err) {
                res.sendError(err);
            }
        });
    }
}