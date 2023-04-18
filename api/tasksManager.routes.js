import express from 'express';
import UsersController from './users.controller.js';
import TasksController from './tasks.controller.js';

const router = express.Router();

router.route('/users').get(UsersController.apiGetUsers);
router.route('/users').post(UsersController.apiAddUser);
router.route('/users/:id').get(UsersController.apiGetUserById);

router.route('/tasks').get(TasksController.apiGetTasks);
router.route('/tasks/:id').get(TasksController.apiGetTasksByUserId);
router.route('/tasks').post(TasksController.apiAddTask);
router.route('/tasks/:id').delete(TasksController.apiDeleteTask);
router.route('/tasks').put(TasksController.apiUpdateTask);

export default router;