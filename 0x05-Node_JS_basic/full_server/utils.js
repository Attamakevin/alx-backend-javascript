const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        // Read the file asynchronously
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                // If there is an error reading the file, reject the promise with the error
                reject(err);
            } else {
                // Parse the data (assuming it's in JSON format)
                try {
                    const database = JSON.parse(data);

                    // Extract first names per field
                    const result = {};
                    for (const field in database) {
                        if (database.hasOwnProperty(field)) {
                            result[field] = database[field].map(student => student.firstname);
                        }
                    }

                    // Resolve the promise with the result
                    resolve(result);
                } catch (parseError) {
                    // If there is an error parsing the data, reject the promise with the parse error
                    reject(parseError);
                }
            }
        });
    });
}

// Example usage:
const filePath = 'path/to/your/database.json';

readDatabase(filePath)
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
