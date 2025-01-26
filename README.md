# Mediversal Frontend

## Preview

![SignUp Form](https://res.cloudinary.com/djaibwcod/image/upload/v1737917739/22dbbe22-14fe-40b8-8fde-90c60dc693df.png)

## Introduction
Mediversal Frontend is a React-based web application designed to interact with the Mediversal backend. This platform helps manage medical records, appointments, and user authentication. The frontend is built with **React**, **TypeScript**, and powered by **Vite** for a seamless development experience.

## Features
- **User-friendly interface** for interacting with backend services.
- **Responsive design** for a smooth experience across devices.
- **SignUp and Validation** for user profile management.

---

## Installation

### Prerequisites
Before you begin, ensure you have the following installed:
- [**Node.js**](https://nodejs.org/) (for JavaScript runtime)
- [**npm**](https://www.npmjs.com/) (Node Package Manager)

### Steps to Install
1. **Clone the repository:**
    ```bash
    git clone https://github.com/vijayiitp/mediversal_frontend.git
    cd mediversal_frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run start
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Description

### Signup Form and Validation

The Mediversal frontend includes a **signup form** for new users. This form validates user input before submitting data to the backend for registration. Below is an explanation of the form and its validation logic:

### **Signup Form Logic:**

The form consists of four fields:
- **Username**
- **Email**
- **Password**
- **Contact**

Upon form submission, the following validation steps are applied:

1. **Username Validation**:  
   Ensures that the username is not empty and meets a minimum length requirement.
   
2. **Email Validation**:  
   Verifies that the email address follows the correct email format (e.g., `user@example.com`).

3. **Password Validation**:  
   Checks if the password meets the required strength criteria, such as:
   - Minimum 8 characters long.

4. **Contact**:  
   Ensures that the length of number is 10.
