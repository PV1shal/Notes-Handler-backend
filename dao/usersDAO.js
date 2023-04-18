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
            return { error: e.message };
        }
    }

    static async addUser(userDetails) {
        try {
            await users.insertOne({ _id: userDetails.username });
            return { message: "User added successfully" };
        } catch (e) {
            console.error(`Unable to add user: ${e}`);
            return { error: e.message };
        }
    }

    static async getUserById(userId) {
        try {
            return await users.findOne({ _id: userId });
        } catch (error) {
            console.error(`Unable to get user: ${error}`);
            return { error: error.message };
        }
    }
}