# BMI Calculator

A simple Body Mass Index (BMI) calculator with a history feature.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [License](#license)

## Introduction

The BMI Calculator is a web-based application that calculates Body Mass Index (BMI) based on user input, providing insights into an individual's body weight relative to their height. The project includes a history feature, allowing users to track past BMI calculations with timestamps.

## Features

- BMI Calculation
- History Tracking with Timestamps
- User-friendly Web Interface

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/bmi-calculator.git
# Navigate to the Project Directory:
cd bmi-calculator

# Install Dependencies:
npm install

# Usage
## Start the Server:
node root.js
# The server will run on http://localhost:3000.

## Open Your Web Browser:
# Visit http://localhost:3000 to access the BMI Calculator.

## Enter Information:
# Enter the required information (age, gender, height, weight, and unit) and click the "Calculate BMI" button.

## View BMI History:
# To view the BMI history, navigate to http://localhost:3000/history.

# Dependencies
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- body-parser: Node.js body parsing middleware.

# Project Structure
- bmiCalculator.html: HTML file containing the BMI calculator form.
- bmiCalculator.js: JavaScript file handling BMI calculations and history.
- root.js: Server-side code using Express to serve the HTML, handle BMI calculations, and provide a history route.
