# Routes Tables APIS
### User Routes Table
| Method    | URI  | Action      | File Location |
|:---------:|:------------------:|:----------------------:|:----------------------------------: |
| **GET**   | api/v1/user        | Get All Users          | ./controllers/user/getUsers         |
| **GET**   | api/v1/user/{id}   | Get a User by ID       | ./controllers/user/getUser          |
| **POST**  | api/v1/user        | Create a User          | ./controllers/user/createUser       |
| **PUT**   | api/v1/user/{id}   | Update a User INFO     | ./controllers/user/updateUserById   |


### TODO Routes Table
| Method    | URI  | Action      | File Location |
|:---------:|:----:|:------------: |:------------: |
| **GET**   | api/v1/todo                             |   Get All TODOS                                         | ./controllers/todo/getTodos         |
| **GET**   | api/v1/todo/{id}                        |   Get a TODO by ID                                      | ./controllers/todo/getTodo          |
| **GET**   | api/v1/todo/{status}                    |   Get TODOS by Status {Pending,inProgress, done}        | ./controllers/todo/getTodosByStatus |
| **GET**   | api/v1/todo/user/{user_id}/{status}     |   Get TODOS by User ID {Pending,inProgress, done}       | ./controllers/user/getTodoByUserId  |
| **POST**  | api/v1/todo           	              |   Create a TODO                                         | ./controllers/user/createTodo       |
| **PUT**   | api/v1/todo/{id}      	              |   Update TODO by ID                                     | ./controllers/user/updateTodoById   |
| **DELETE**| api/v1/todo/{id}      	              |   Delete a TODO by ID                                   | ./controllers/user/deleteTodoById   |


### Auth Routes Table
| Method    | URI  | Action      | File Location |
|:---------:|:----:|:------------: |:------------: |
| **POST**   | api/v1/auth         |   Login User  | ./controllers/auth/authLogin         |
