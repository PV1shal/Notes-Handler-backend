import UsersDAO from '../dao/usersDAO.js';

export default class UsersController {
    static async apiGetUsers(req, res, next) {
        try {
            const response = await UsersDAO.getAllUsers();
            var { error } = response;
            if (error) {
                res.status(500).json({ error: "Unable to get all Users" });
            } else {
                res.json({ Users: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async apiAddUser(req, res, next) {
        try {
            const userDetails = req.body.userDetails;
            const response = await UsersDAO.addUser(userDetails);
            if (response.error) {
                console.log(response.error);
                res.status(500).json({ error: "Unable to add user" });
            } else {
                res.json({
                    status: "Successfully added user",
                    _id: response.insertedId
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async apiGetUserById(req, res, next) {
        try {
            const userId = req.params.id;
            // console.log(userId);
            const response = await UsersDAO.getUserById(userId);
            var { error } = response;
            if (error) {
                res.status(500).json({ error: "Unable to get all Users" });
            } else {
                res.status(200).json({ Users: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}