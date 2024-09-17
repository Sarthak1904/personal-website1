const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/config', (req, res) => {
    const config = {
        colors: [
            { color: "#FFF056", enabled: true },
            { color: "#FFE246", enabled: true },
            { color: "#FDC43F", enabled: true },
            { color: "#bde0fe", enabled: true },
            { color: "#a2d2ff", enabled: false }
        ],
        speed: 4,
        horizontalPressure: 3,
        verticalPressure: 3,
        waveFrequencyX: 2,
        waveFrequencyY: 4,
        waveAmplitude: 5,
        shadows: 0,
        highlights: 2,
        colorSaturation: 3,
        wireframe: false,
        colorBlending: 5,
        backgroundColor: "#003FFF",
        backgroundAlpha: 1,
        resolution: 1
    };
    res.json(config);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
