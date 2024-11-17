# QuickNoteX: A Full-Stack Note-Taking Application

QuickNoteX is a full-stack application designed for users to create, edit, and manage their notes efficiently. It features a responsive user interface built with React and Tailwind CSS, a backend powered by Node.js and Express, and a MongoDB database for data storage. This project emphasizes simplicity, user-friendliness, and scalability.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
   - [Frontend](#frontend)
   - [Backend](#backend)
3. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Steps](#steps)
4. [Folder Structure](#folder-structure)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [Acknowledgments](#acknowledgments)

---

## Features

- **User Authentication**: Secure login and signup using JWT.
- **Note Management**: Add, edit, delete, and view notes.
- **Theming**: Supports light and dark themes.
- **Responsive Design**: Optimized for devices of all sizes.
- **Real-Time Feedback**: Integrated with `react-toastify` for notifications.

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Axios for HTTP requests

---

## Installation

### Prerequisites 📋

Ensure the following are installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

---

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/username/QuickNoteX.git
   cd QuickNoteX
   ```

2. Set up the backend:
   ```bash
    cd backend
    npm install
   ```

    Create a .env file:
    ```bash
      PORT=5000
      MONGODB_URI=mongodb://localhost:27017/quicknotex
      JWT_SECRET=your_secret_key
    ```
 
    Start the backend server:
    ```bash
    npm start
    ```

3. Set up the frontend:
   ```bash
    cd ../frontend
    npm install
    npm start
   ```
4. Open your browser and navigate to http://localhost:3000.

## Folder Structure

    QuickNoteX/
    ├── backend/
    │   ├── models/
    │   ├── routes/
    │   ├── db/
    │   ├── middleware/
    │   └── server.js
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── context/
    │   │   ├── App.jsx
    │   │   └── index.js
    ├── README.md
    └── .gitignore

## Usage

1. Register an account or log in with existing credentials.
2. Create new notes by clicking the "Add Note" button.
3. Edit or delete notes using the respective icons on each note card.
4. Switch between light and dark themes from the settings.

## Contributions

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Commit your changes: git commit -m 'Add feature-name'.
4. Push the branch: git push origin feature-name.
5. Submit a pull request.

## Acknowledgments

- [React](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Node.js](https://nodejs.org/en/docs/)
- [MongoDB](https://www.mongodb.com/docs/)
