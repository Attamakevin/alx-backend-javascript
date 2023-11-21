const utils = require('./utils');

class StudentsController {
    static getAllStudents(request, response) {
        // Call readDatabase from utils file
        utils.readDatabase('path/to/your/database.json')
            .then(database => {
                // Display the list of students
                const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

                // Send the response
                response.set_status(200);
                response.set_message('This is the list of our students');
                fields.forEach(field => {
                    const numStudents = database[field].length;
                    const list = database[field].map(student => student.firstname).join(', ');

                    response.add_line(`Number of students in ${field}: ${numStudents}. List: ${list}`);
                });

                response.send();
            })
            .catch(error => {
                // If the database is not available, return a status 500 and the error message
                response.set_status(500);
                response.set_message(`Cannot load the database. Error: ${error}`);
                response.send();
            });
    }

    static getAllStudentsByMajor(request, response) {
        const major = request.params.major;

        // Check if the major parameter is valid
        if (major !== 'CS' && major !== 'SWE') {
            response.set_status(500);
            response.set_message('Major parameter must be CS or SWE');
            response.send();
            return;
        }

        // Call readDatabase from utils file
        utils.readDatabase('path/to/your/database.json')
            .then(database => {
                // Display the list of students in the specified major
                const studentsInMajor = database[major].map(student => student.firstname).join(', ');

                // Send the response
                response.set_status(200);
                response.add_line(`List: ${studentsInMajor}`);
                response.send();
            })
            .catch(error => {
                // If the database is not available, return a status 500 and the error message
                response.set_status(500);
                response.set_message(`Cannot load the database. Error: ${error}`);
                response.send();
            });
    }
}

