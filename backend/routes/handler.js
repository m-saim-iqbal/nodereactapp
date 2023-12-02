const express = require('express');
const router = express.Router();

router.get('/books', (req, res) => {
  const data = [{
    "name": "Saim",
    "msg": "First Book",
    "id": "1"
  }];
  
  // Use res.json() to send JSON response
  res.json(data);
});

// Add other routes or methods as needed, e.g., router.post()

module.exports = router;
