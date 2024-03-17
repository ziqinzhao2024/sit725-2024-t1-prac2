const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Route for addTwoNumbers API
app.get('/addTwoNumbers', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both numbers should be valid numbers' });
    }

    const data = num1 + num2;
    res.status(200).json({ data: `${data}`, message: "success"});
});

// Start the server
app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`);
});