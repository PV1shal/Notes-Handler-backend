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
}