import UsersDAO from '../dao/usersDAO.js';

export default class UsersController {
    static async apiGetUsers(req, res, next) {
        try {
            const response = await UsersDAO.getAllUsers();
            var { error } = response;
            if (error) {
                res.status(500).json({ error: "Unable to get all Locations" });
            } else {
                res.json({ locations: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}