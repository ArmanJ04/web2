const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
let bmiHistory = []; 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    const { height, weight } = req.body;
    const bmiResult = calculateBMI(height, weight);
    const timestamp = new Date().toLocaleString();
    bmiHistory.push({ timestamp, bmiResult });

    res.send(`<h3>BMI Result:</h3><p>${bmiResult.toFixed(2)}, ${interpretation}</p>`);
});

app.get('/history', (req, res) => {
    res.send(`<h3>BMI History:</h3>${renderHistory()}`);
});

app.get('/bmiCalculator.js', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.js');
});
function calculateBMI(height, weight) {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    return `Your BMI is ${bmi}.`;
}
function renderHistory() {
    if (bmiHistory.length === 0) {
        return '<p>No BMI history available.</p>';
    }
    return bmiHistory.map(entry => `<p>${entry.timestamp}: ${entry.bmiResult}</p>`).join('');
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
