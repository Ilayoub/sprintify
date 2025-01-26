# Project Management System

This project is a web-based application designed to streamline project management processes. It includes a robust backend built with Spring Boot and a modern, interactive frontend developed with React. The application enables users to create, manage, and collaborate on projects effectively.

## Features

### Backend (Spring Boot)
- Implements RESTful APIs for interaction with the frontend.
- Secure authentication and authorization with Spring Security and JWT.
- Efficient database management using JPA with MySQL.
- Validation and error handling for robust backend operations.

### Frontend (React)
- Responsive user interface using React with Tailwind CSS.
- State management handled by Redux for a seamless user experience.
- Integration with the backend via Axios for API communication.

### Additional Features
- Project creation, filtering, and search functionalities.
- Issue management within projects, including comments and CRUD operations.
- Project-based chat system for team communication.

---

## Technologies Used

### Backend
- Spring Boot
- Spring Security
- JSON Web Token (JWT)
- JPA (Hibernate)
- MySQL

### Frontend
- React
- Redux
- Tailwind CSS
- Shadcn UI Library

## Getting Started

### Prerequisites
1. Install Node.js and npm for the React frontend.
2. Install Java 17+ and Maven for the Spring Boot backend.
3. Set up a MySQL database and configure the credentials in the backend.

### Setup Instructions

#### Backend (Spring Boot)
1. Clone the repository.
   ```bash
   git clone <repository-url>
   cd backend
   ```
2. Configure the `application.properties` file with your database credentials.
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```
3. Build and run the backend server.
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

#### Frontend (React)
1. Navigate to the frontend directory.
   ```bash
   cd frontend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Start the React development server.
   ```bash
   npm start
   ```

---

## Usage
1. Access the application at `http://localhost:5173` for the frontend.
2. The backend APIs will be available at `http://localhost:4000`.

## Contributing
Contributions are welcome! Fork this repository and create a pull request to add features or fix issues.
