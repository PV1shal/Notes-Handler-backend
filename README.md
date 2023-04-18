# Lighthall Challenge 2 - Task Manager

## Backend code for challenge 2

### Functions Available:
- Users: 
    - Get All Users
    - Add User
    - Get User by username
- Tasks:
    - Get All Tasks
    - Get Task by username
    - Add new Task
    - Update Task by id
    - Delete Task by id

## <u>How to use?</u>
The base URL to do a http request is:
https://lighthall-challenge2-backend.herokuapp.com/

<u><b>CRUD operations on user:</b></u>

- Get all Users (GET):
    https://lighthall-challenge2-backend.herokuapp.com/api/taskManager/users

- Get User by ID (id being the username)  (GET):
    https://lighthall-challenge2-backend.herokuapp.com/api/taskManager/users/${id}

    - Example to get/check if Username Vishal exists: https://lighthall-challenge2-backend.herokuapp.com/api/taskManager/users/Vishal

- Add User (POST):
    https://lighthall-challenge2-backend.herokuapp.com/api/taskManager/users

    - Body should be a JSON object named 'userDetails'. Example:
    ```
    {
        "userDetails": {
            "username": "Vishal"
        }
    }
    ```

<u><b>CRUD operations on Tasks:</b></u>

- Get all Tasks (GET):
    http://localhost:8000/api/taskManager/tasks

- Get task by userID i.e. username (GET):
    http://localhost:8000/api/taskManager/tasks/${id}

    - Example to get/check if Username Vishal exists: 
    https://lighthall-challenge2-backend.herokuapp.com/api/taskManager/users/Vishal

    - To add Sorting i.e. get task by id sorted by particular field like:
    http://localhost:8000/api/taskManager/tasks/${id}?sortBy={field}

        - Example: 
            http://localhost:8000/api/taskManager/tasks/Elijah?sortBy=description

- Add New task (POST):
    http://localhost:8000/api/taskManager/tasks

    - Returns unique random id of the created task.

    - Body should be a JSON object named 'task'. Example:
    ```
    {
        "task": {
            "taskOwner": "Elijah",
            "title": "Something",
            "description": "This is to do something",
            "status": "in progress...",
            "due": "4/17/2023"
        }
    }
    ```

- Delete task by task ID (DELETE):
    http://localhost:8000/api/taskManager/tasks/${taskID}

    - Example:
        http://localhost:8000/api/taskManager/tasks/643e3446622da0b8b2481ae9

- Update Task Details:
    http://localhost:8000/api/taskManager/tasks

    - Body should be a JSON object named 'task' with taskID present in the object. Example:
    ```
    {
        "task": {
            "_id": "643e384a37ee64bb3cb287d7",
            "taskOwner": "Elijah",
            "title": "Something1",
            "description": "abc",
            "status": "Done",
            "due": "4/17/2023"
        }
    }
    ```


Adding a Screenshot of what the document looks likes on mongodb:

