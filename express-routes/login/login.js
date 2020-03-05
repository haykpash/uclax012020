const express = require('express');
const router = express.Router();

router.post('/send', (req,res) => {
    const response = {
        errors: false, 
        message: 'login',
        postedData: req.body,
    }
    
    console.log('Post Sent Login');
    res.json(response);
});

module.exports = router;