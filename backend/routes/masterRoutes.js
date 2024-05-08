const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test,masterLogin,masterRegister,pumpList}= require('../controllers/masterController');

// Middleware for CORS configuration
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // Update this with the actual origin of your frontend
    })
);

router.get('/', test);
router.post('/masterLogin', masterLogin);

router.post('/masterRegister', masterRegister);

router.get('/masterGetPumps', pumpList);

module.exports = router;