const express = require('express');
const router = express.Router();

// Route for the jobs page
router.get('/', (req, res) => {
  // Send the static jobs.html file
  res.sendFile(__dirname + '/resume.html');
});

module.exports = router;