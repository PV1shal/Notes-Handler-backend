import express from 'express';
import UsersController from './users.controller.js';
import TasksController from './tasks.controller.js';

const router = express.Router();

router.route('/users').get(UsersController.apiGetUsers);
router.route('/tasks').get(TasksController.apiGetTasks);
// router.route('/tasks/:id').get(TasksController.apiGetTaskById);
// router.route('/tasks/:id').put(TasksController.apiUpdateTask);
// router.route('/tasks/:id').delete(TasksController.apiDeleteTask);
// router.route('/tasks').post(TasksController.apiAddTask);

export default router;