import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;

export default class UsersDAO {
    static async injectDB(conn) {
        if (users) {
            return;
        }
        try {
            users = await conn.db(process.env.TASKS_NS).collection("users");
        } catch (e) {
            console.error(`Unable to establish collection handles in usersDAO: ${e}`);
        }
    }

    static async getAllUsers() {
        try {
            return await users.find().toArray();
        } catch (e) {
            console.error(`Unable to get users: ${e}`);
            return { error: e };
        }
    }
}