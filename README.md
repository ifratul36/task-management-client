Task Management Application

Short Description

This is a Task Management Application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. The app provides real-time updates and ensures data persistence using MongoDB. Only authenticated users can access the application via Firebase Authentication.

Live Links

Live Demo: [Your Live Link Here]

Frontend Repository: [GitHub Frontend Repo Link]

Backend Repository: [GitHub Backend Repo Link]

Dependencies

Frontend:

React.js

Vite.js

Firebase Authentication

React Beautiful DnD (for drag-and-drop functionality)

Axios (for API requests)

Tailwind CSS (for styling)

Backend:

Node.js

Express.js

MongoDB

Cors

Dotenv

Installation Steps

Prerequisites:

Install Node.js and npm (or yarn)

Install MongoDB and ensure it is running

Backend Setup:

Clone the backend repository:

git clone [Backend Repo URL]

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Create a .env file and add the required environment variables:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend server:

npm run dev

Frontend Setup:

Clone the frontend repository:

git clone [Frontend Repo URL]

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Create a .env file and configure Firebase authentication:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id

Start the frontend application:

npm run dev

Technologies Used

Frontend: React.js, Vite.js, Firebase Authentication, Tailwind CSS

Backend: Node.js, Express.js, MongoDB, Mongoose

State Management: React Hooks

Styling: Tailwind CSS

Real-time Updates: WebSockets or MongoDB Change Streams

Drag-and-Drop: React Beautiful DnD

This README provides an overview of the project, setup instructions, and dependencies. Make sure to replace placeholder links with actual URLs before submission! 🚀