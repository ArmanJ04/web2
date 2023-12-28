const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let bmiHistory = [];

function calculateBMIMetric(height, weight) {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    return parseFloat(bmi);
}

function calculateBMIImperial(height, weight) {
    const bmi = (703 * weight / (height * height)).toFixed(2);
    return parseFloat(bmi);
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function renderHistory() {
    if (bmiHistory.length === 0) {
        return '<p>No BMI history available.</p>';
    }
    return bmiHistory.map(entry => `<p>${entry.timestamp}: ${entry.bmiResult} (${entry.interpretation})</p>`).join('');
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    const { height, weight, unit } = req.body;
    let bmiResult;

    if (unit === 'metric') {
        bmiResult = calculateBMIMetric(height, weight);
    } else if (unit === 'imperial') {
        bmiResult = calculateBMIImperial(height, weight);
    }

    const interpretation = interpretBMI(bmiResult);

    console.log('BMI Result:', bmiResult);
    console.log('Interpretation:', interpretation);

    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    bmiHistory.push({ timestamp, bmiResult, interpretation });

    res.send(`<h3>BMI Result:</h3><p>${bmiResult.toFixed(2)}, ${interpretation}</p>`);
});

app.get('/history', (req, res) => {
    res.send(`<h3>BMI History:</h3>${renderHistory()}`);
});

app.get('/bmiCalculator.js', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.js');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
