This is the backend for a Job Portal application built with Node.js, Express, MongoDB, and Swagger. The API allows users to register, login, create and manage job listings, and view job stats. It also includes user authentication and rate limiting features to secure the API.

Table of Contents
Project Overview
Features
Technologies Used
API Documentation
Setup Instructions
Deployment
Contributing
License
Project Overview
The Job Portal Backend API serves as the backend for the Job Portal web application. It provides the necessary endpoints for job seekers and employers to register, log in, and manage job postings. The API is built with a focus on security, using user authentication and input validation techniques.

This backend is deployed on Render and is accessible via this link.

Features
User Authentication: Register, login, and manage users.
Job Listings: Employers can create, update, delete, and view job postings.
Job Stats: Filter job stats for employers to understand job trends.
Swagger API Documentation: Automatically generated documentation for all available API endpoints.
Security:
Rate limiting to prevent abuse.
Input validation and sanitization to prevent security risks like XSS and SQL injection.
Authentication using JWT (JSON Web Tokens).
Technologies Used
Node.js: JavaScript runtime for building the server.
Express.js: Web framework for Node.js for building RESTful APIs.
MongoDB: NoSQL database to store job and user data.
Swagger: API documentation tool for auto-generating endpoint docs.
JWT: For user authentication and session management.
Rate Limit: To limit the number of requests made to the API.
API Documentation
The full API documentation is available at the following endpoint:
API Documentation

Swagger provides an interactive interface where you can test all the API endpoints directly.

Available Routes
Authentication Routes:
POST /api/v1/auth/register: Register a new user.
POST /api/v1/auth/login: Login an existing user.
Job Routes:
POST /api/v1/job/create-job: Create a new job listing.
GET /api/v1/job/get-job: Get all job listings.
PATCH /api/v1/job/update-job/:id: Update a job listing.
DELETE /api/v1/job/delete-job/:id: Delete a job listing.
GET /api/v1/job/job-stats: Get job stats (e.g., number of jobs by category).
User Routes:
PUT /api/v1/user/update-user: Update user information.
Setup Instructions
To set up the project locally, follow these steps:

Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (or use a cloud service like MongoDB Atlas)
Git
Installation
Clone the repository:

git clone https://github.com/rsakm/Job-Portal-backend.git
cd job-portal-backend
Install the dependencies:

npm install
Create a .env file in the root directory of the project and add the following environment variables:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=8080
Run the application:

npm start
The server will start running at http://localhost:8080.

Deployment
This backend API is deployed on Render and can be accessed via the following link:
Job Portal Backend

Deployment Steps on Render:
Push the project to GitHub.
Create a new web service on Render and link it to your GitHub repository.
Configure the environment variables in the Render dashboard (MONGO_URI, JWT_SECRET, etc.).
Start the deployment and wait for it to complete.
Once deployed, the backend will be accessible via the generated URL.
Contributing
We welcome contributions to the Job Portal Backend! If you want to contribute, please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Make your changes.
Commit your changes: git commit -m 'Add your feature'.
Push to your fork: git push origin feature/your-feature.
Open a pull request on GitHub.
