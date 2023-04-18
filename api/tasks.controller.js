import TasksDAO from "../dao/tasksDAO.js";

export default class TasksController {
    static async apiGetTasks(req, res, next) {
        try {
            const response = await TasksDAO.getAllTasks();
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