const express = require('express');
const auth = require('basic-auth');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Get credentials from environment variables
const AUTH_USER = process.env.AUTH_USER || 'steve';
const AUTH_PASS = process.env.AUTH_PASS || 'regaia2026';

// Basic Auth middleware
const requireAuth = (req, res, next) => {
    const credentials = auth(req);
    
    if (!credentials || credentials.name !== AUTH_USER || credentials.pass !== AUTH_PASS) {
        res.set('WWW-Authenticate', 'Basic realm="Regaia Dashboard"');
        return res.status(401).send('Authentication required');
    }
    
    next();
};

// Serve static files with auth
app.use(requireAuth, express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Regaia Dashboard running on port ${PORT}`);
    console.log(`Credentials: ${AUTH_USER} / ${AUTH_PASS}`);
});
