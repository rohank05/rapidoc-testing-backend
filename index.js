const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
var cors = require('cors')

// Define the path to the Excel file
const filePath = path.join(__dirname, "Downloadable.xlsx");
app.use(cors())
app.get("/", (req, res) => {
    res.set("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.set('content-disposition', `attachment; filename="Testing.xlsx"`);
    res.sendFile(filePath);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
