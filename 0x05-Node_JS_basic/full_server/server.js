// full_server/server.js
import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
