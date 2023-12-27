function calculateBMI() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const unit = document.getElementById('unit').value;
    if (!age || !height || !weight) {
        alert('Please fill in all required fields.');
        return;
    }
    fetch('/bmicalculator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `age=${age}&gender=${gender}&height=${height}&weight=${weight}&unit=${unit}`,
    })
        .then(response => response.text())
        .then(result => {
            console.log('Server response:', result);
            document.getElementById('result').innerHTML = result;
            fetch('/history')
                .then(response => response.text())
                .then(history => {
                    document.getElementById('history').innerHTML = history;
                })
                .catch(error => {
                    console.error('Error fetching history:', error);
                });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}