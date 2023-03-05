# CB_Task4 :rocket:
The task was completed as part of the course "No-code clustering of texts" from the fintech of the Central Bank of the Russian Federation
## Time = [25.02.2023 - 05.03.2023]
Write an interface to the back-end of the application. As a tool, you need to use the React library.
Task completion condition:
1.The interface must interact with the back-end server API.
2. The application must:
- Get a list of all existing tasks (add a new task)
- Go to a specific task (change, delete a task)
- Authorize the user through a special form
3. It is necessary to provide routing of components in the work:
- Task list page (/todos)
- A page with a specific task (/todo/{id})
- Welcome HomePage with introductory information (/)
- Authorization page (/auth)
- Page 404 (NotFound) (/{*})
- (Optional) Routing inside the modal authorization window (/login, /registration)
4. The Redux and Redux-thunk library should be used in the work to form a single repository and implement
asynchronous actions (GET, POST requests).
5. Access to Todo tasks must be granted only to authorized users.
Therefore, the first 2 routers should return a message that you need to log in.
