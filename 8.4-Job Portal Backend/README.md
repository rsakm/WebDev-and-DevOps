# Job Portal Backend

This is the backend for a Job Portal application built with **Node.js**, **Express**, **MongoDB**, and **Swagger**. The API allows users to register, login, create and manage job listings, and view job stats. It also includes user authentication and rate limiting features to secure the API.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [API Documentation](#api-documentation)
5. [Setup Instructions](#setup-instructions)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

## Project Overview

The **Job Portal Backend** API serves as the backend for the Job Portal web application. It provides the necessary endpoints for job seekers and employers to register, log in, and manage job postings. The API is built with a focus on security, using user authentication and input validation techniques.

This backend is deployed on **Render** and is accessible via [this link](https://job-portal-backend-website.onrender.com).

## Features

- **User Authentication**: Register, login, and manage users.
- **Job Listings**: Employers can create, update, delete, and view job postings.
- **Job Stats**: Filter job stats for employers to understand job trends.
- **Swagger API Documentation**: Automatically generated documentation for all available API endpoints.
- **Security**: 
  - Rate limiting to prevent abuse.
  - Input validation and sanitization to prevent security risks like XSS and SQL injection.
  - Authentication using JWT (JSON Web Tokens).

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for Node.js for building RESTful APIs.
- **MongoDB**: NoSQL database to store job and user data.
- **Swagger**: API documentation tool for auto-generating endpoint docs.
- **JWT**: For user authentication and session management.
- **Rate Limit**: To limit the number of requests made to the API.

## API Documentation

The full API documentation is available at the following endpoint:  
[API Documentation](https://job-portal-backend-website.onrender.com/api-doc)

Swagger provides an interactive interface where you can test all the API endpoints directly.

### Available Routes

#### Authentication Routes:
- **POST `/api/v1/auth/register`**: Register a new user.
- **POST `/api/v1/auth/login`**: Login an existing user.

#### Job Routes:
- **POST `/api/v1/job/create-job`**: Create a new job listing.
- **GET `/api/v1/job/get-job`**: Get all job listings.
- **PATCH `/api/v1/job/update-job/:id`**: Update a job listing.
- **DELETE `/api/v1/job/delete-job/:id`**: Delete a job listing.
- **GET `/api/v1/job/job-stats`**: Get job stats (e.g., number of jobs by category).

#### User Routes:
- **PUT `/api/v1/user/update-user`**: Update user information.

## Setup Instructions

To set up the project locally, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or use a cloud service like MongoDB Atlas)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/<your-github-username>/job-portal-backend.git
    cd job-portal-backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory of the project and add the following environment variables:
    ```
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    PORT=8080
    ```

4. Run the application:
    ```bash
    npm start
    ```

    The server will start running at `http://localhost:8080`.

## Deployment

This backend API is deployed on **Render** and can be accessed via the following link:  
[Job Portal Backend](https://job-portal-backend-website.onrender.com)

### Deployment Steps on Render:

1. Push the project to GitHub.
2. Create a new web service on Render and link it to your GitHub repository.
3. Configure the environment variables in the Render dashboard (MONGO_URI, JWT_SECRET, etc.).
4. Start the deployment and wait for it to complete.
5. Once deployed, the backend will be accessible via the generated URL.

## Contributing

We welcome contributions to the Job Portal Backend! If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes.
4. Commit your changes: `git commit -m 'Add your feature'`.
5. Push to your fork: `git push origin feature/your-feature`.
6. Open a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the Job Portal Backend API! For any further queries or issues, feel free to open an issue on the GitHub repository.

