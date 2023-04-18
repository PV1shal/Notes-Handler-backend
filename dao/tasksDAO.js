import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let tasks;

export default class TasksDAO {
    static async injectDB(conn) {
        if (tasks) {
            return;
        }
        try {
            tasks = await conn.db(process.env.TASKS_NS).collection("tasks");
        } catch (e) {
            console.error(`Unable to establish collection handles in usersDAO: ${e}`);
        }
    }

    static async getAllTasks() {
        try {
            return await tasks.find().toArray();
        } catch (e) {
            console.error(`Unable to get users: ${e}`);
            return { error: e };
        }
    }

    static async getTasksByUserId(userId, sortBy) {
        try {
            let sortQuery = {};
            if (sortBy === "title") {
                sortQuery = { title: -1 };
            } else if (sortBy === "status") {
                sortQuery = { status: -1 };
            } else if (sortBy === "dueDate") {
                sortQuery = { dueDate: -1 };
            }
            return await tasks.find({ taskOwner: userId }).sort(sortQuery).toArray();
        } catch (error) {
            console.error(`Unable to get tasks: ${error}`);
            return { error: error };
        }
    }

    static async addTask(task) {
        try {
            const taskData = {
                taskOwner: task.taskOwner,
                title: task.title,
                description: task.description,
                status: task.status,
                due: new Date(task.due),
            }
            return await tasks.insertOne(taskData);
        } catch (error) {
            console.error(`Unable to add task: ${error}`);
            return { error: error };
        }
    }

    static async deleteTask(taskId) {
        try {
            console.log("taskId: " + taskId);
            return await tasks.deleteOne({ _id: new ObjectId(taskId) });
        } catch (error) {
            return { error: error };
        }
    }

    static async updateTask(taskId, task) {
        try {
            const taskData = {
                taskOwner: task.taskOwner,
                title: task.title,
                description: task.description,
                status: task.status,
                due: new Date(task.due),
            }
            return await tasks.updateOne({ _id: new ObjectId(taskId) }, { $set: taskData });
        } catch (error) {

        }
    }
}