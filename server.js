const express = require('express');
const fs = require('fs');

const app = express();
const port = 9001; // Change the port to 9001

app.get('/', (req, res) => {
    // Specify the full path to the text file
    const filePath = `${process.env.USERPROFILE}\\OneDrive\\Desktop\\server\\test.txt`;

    // Read the content of the text file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the file');
        }

        // Send the content as the response
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Test</title>
            </head>
            <body>
                <pre>${data}</pre>
            </body>
            </html>
        `);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
