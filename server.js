const express = require('express');
const app = express();

app.get('/time', (req, res) => {
    const now = new Date();
    const timeData = {
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0'),
        iso: now.toISOString()
    };
    res.json(timeData);
});

const PORT = process.env.PORT || 3000; // Gunakan port dari lingkungan jika tersedia
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
