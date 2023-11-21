import express from 'express';
import AppController from '../controllers/AppController'; // Adjust the path accordingly
import StudentsController from '../controllers/StudentsController';

const app = express.app;

// Link the route '/' to the AppController
app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
});

// Link the route '/students' to StudentsController.getAllStudents
app.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
});

// Link the route '/students/:major' to StudentsController.getAllStudentsByMajor
app.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
