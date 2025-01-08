# Placement Cell Project 



Live Demo: [🌐 Placement Cell Project](https://placement-cell-bxkl.onrender.com/)

---

## 📖 Overview

The **Placement Cell Project** is a comprehensive web application designed to streamline the management of job placements, students, and interviews. It includes key features such as user authentication, student management, interview scheduling, and tracking the status of students for various interviews.

---

## ✨ Features

- **🔒 User Authentication:**
  - Sign up, log in, and manage sessions securely using JWT authentication.

- **👨‍🎓 Student Management:**
  - Add, delete, and update student records effortlessly.

- **📅 Interview Management:**
  - Schedule interviews, add students to interviews, and view detailed interview information.

- **📊 Dashboard:**
  - Centralized page displaying user information, students, and interviews for easy navigation.

---

## 🛠️ Tech Stack

| **Technology**       | **Details**                |
|-----------------------|----------------------------|
| **Backend**          | Node.js, Express           |
| **Database**         | MongoDB with Mongoose      |
| **Authentication**   | JWT, bcrypt                |
| **Templating Engine**| EJS                        |
| **CSS Framework**    | Tailwind CSS               |

---

## 📂 Routes

### **General**
- `GET /` - Render the home page.
- `GET /login` - Render the login page.
- `POST /login` - Handle user login.
- `GET /signup` - Render the signup page.
- `POST /signup` - Handle user registration.

### **Dashboard**
- `GET /dashboard` - Render the dashboard with user data.

### **Interview Management**
- `POST /interview` - Add a new interview.
- `DELETE /interview/:id` - Delete an interview by ID.

### **Student Management**
- `POST /students/add` - Add a new student.
- `DELETE /students/:id` - Delete a student by ID.
- `POST /students/update-status` - Update student status for an interview.

---

## 🗂️ Controllers

### **HomeController**
- Manages rendering for home, login, signup, and dashboard pages.

### **InterviewController**
- Handles interview creation, deletion, and student management within interviews.

### **StudentController**
- Manages addition, deletion, and status updates for students.

---

## 🚨 Error Handling

- Errors are logged to the console for developers.
- Users are shown appropriate error messages or redirected based on the operation's outcome.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Repository**
2. **Create a Feature Branch**: `git checkout -b feature-name`
3. **Commit Your Changes**: `git commit -m 'Add new feature'`
4. **Push to the Branch**: `git push origin feature-name`
5. **Submit a Pull Request**

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/6d286df9-f2ea-4ab6-a774-758f3bf31aac)

![image](https://github.com/user-attachments/assets/111aa14c-9ca6-4712-9b2c-18621b5d8071)

![image](https://github.com/user-attachments/assets/0be1b76c-2d22-4735-837b-bc595cce650f)




---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

### 🔗 Links

- **Live Demo**: [Placement Cell Project](https://placement-cell-bxkl.onrender.com/)
- **GitHub Repository**: [Placement Cell GitHub](#)

---

_Developed with ❤️ by the Placement Cell Team._
