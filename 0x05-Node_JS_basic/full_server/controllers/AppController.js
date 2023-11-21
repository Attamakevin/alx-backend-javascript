import utils from '../utils';

class AppController {
    static getHomepage(request, response) {
        // Assuming you have a method to set the status and message in the response object
        response.set_status(200);
        response.set_message("Hello Holberton School!");
    }
}

// Example usage:
// Assuming you have a Request and Response class, you can use it like this:
// const request = new Request();
// const response = new Response();
// AppController.getHomepage(request, response);
// console.log(response.get_status());  // Output: 200
// console.log(response.get_message()); // Output: Hello Holberton School!

export default AppController;
