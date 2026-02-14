import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/api';
import authRoutes from './routes/auth';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public (if present)
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// Simple root response so you can see the API is running
app.get('/', (req, res) => {
    res.send(`
        <h1>Brawl Stars Draft Bot</h1>
        <p>API is running. Try <code>POST /api/draft</code> for draft recommendations.</p>
        <p><a href="/api/draft">API docs</a></p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});