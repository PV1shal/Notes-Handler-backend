import TasksDAO from "../dao/tasksDAO.js";

export default class TasksController {
    static async apiGetTasks(req, res, next) {
        try {
            const response = await TasksDAO.getAllTasks();
            var { error } = response;
            if (error) {
                res.status(500).json({ error: "Unable to get all Tasks" });
            } else {
                res.json({ Tasks: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async apiGetTasksByUserId(req, res, next) {
        try {
            const userId = req.params.id;
            const sortBy = req.query.sortBy || "title"; // default sort by title
            const response = await TasksDAO.getTasksByUserId(userId, sortBy);
            // const response = await TasksDAO.getTasksByUserId(userId);
            var { error } = response;
            if (error) {
                res.status(500).json({ error: "Unable to get all Tasks" });
            } else {
                res.json({ Tasks: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async apiAddTask(req, res, next) {
        try {
            const task = req.body.task;
            const response = await TasksDAO.addTask(task);
            if (response.error) {
                console.log(response.error);
                res.status(500).json({ error: "Unable to add task" });
            } else {
                res.json({
                    status: "Successfully added task",
                    _id: response.insertedId
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async apiDeleteTask(req, res, next) {
        try {
            const taskId = req.params.id;
            console.log(taskId);
            const response = await TasksDAO.deleteTask(taskId);
            if (response.error) {
                console.log(response.error);
                res.status(500).json({ error: "Unable to delete task" });
            } else {
                res.json({
                    status: "Successfully deleted task",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async apiUpdateTask(req, res, next) {
        try {
            const task = req.body.task;
            const response = await TasksDAO.updateTask(task._id, task);
            if (response.error) {
                console.log(response.error);
                res.status(500).json({ error: "Unable to update task" });
            } else {
                res.json({
                    status: "Successfully updated task",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
}