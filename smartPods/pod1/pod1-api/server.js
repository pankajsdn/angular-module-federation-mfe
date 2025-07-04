const express = require('express');
const cors = require('cors'); // Import CORS middleware

const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 if no PORT env var

// --- CORS Configuration ---
// Option 1: Allow all origins (simplest for development)
app.use(cors());

// Option 2: More specific CORS configuration if needed
// const corsOptions = {
//   origin: 'http://localhost:6001', // Allow pod1-ui (if running on port 6001)
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON bodies

// --- Routes ---
app.get('/', (req, res) => {
  res.send('Pod1 API is running!');
});

app.get('/api/data', (req, res) => {
  res.json({
    podName: "Pod1",
    message: "Data from Pod1 API",
    timestamp: new Date().toISOString()
  });
});

// A simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Pod1 API server listening on port ${PORT}`);
});
