Placement Cell Project 

Live Link: https://placement-cell-bxkl.onrender.com/



Overview

The Placement Cell Project is a web application designed to help users manage job placements, students, and interviews. It features user authentication, student management, interview scheduling, and functionality to manage student status for various interviews.


Features

User Authentication: Users can sign up, log in, and manage their sessions with JWT authentication.

Student Management: Add, delete, and update student records.

Interview Management: Schedule interviews, add students to interviews, and view interview details.

Dashboard: A centralized page displaying user information, students, and interviews.

Tech Stack

Backend: Node.js, Express

Database: MongoDB with Mongoose

Authentication: JWT, bcrypt

Templating Engine: EJS

CSS Framework: Tailwind CSS


Routes

GET / - Render the home page.

GET /login - Render the login page.

POST /login - Handle user login.

GET /signup - Render the signup page.

POST /signup - Handle user registration.

GET /dashboard - Render the dashboard with user data.

POST /interview - Add a new interview.

DELETE /interview/
- Delete an interview by ID.

- 
POST /students/add - Add a new student.


DELETE /students/
- Delete a student by ID.
POST /students/update-status - Update student status for an interview.


Controllers

HomeController: Manages home, login, signup, and dashboard rendering.

InterviewController: Manages interview creation, deletion, and student management within interviews.

StudentController: Handles student addition, deletion, and status updates.

Error Handling

Errors are logged to the console, and users receive appropriate error messages or redirection based on the operation's outcome.


Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
