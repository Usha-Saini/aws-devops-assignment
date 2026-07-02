const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1>🚀 DevOps Engineer Assignment</h1>
    <h2>Submitted by: Usha Saini</h2>
    <p>Application deployed successfully on AWS EC2.</p>
    `);
});

app.listen(3000,"0.0.0.0" , () => {
    console.log("Server running on port 3000");
});
