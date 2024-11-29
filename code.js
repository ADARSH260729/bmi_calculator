document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // converting cm to meters
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid values for weight and height.");
      return;
    }
  
    const bmi = weight / (height * height);
    document.getElementById('bmiResult').textContent = bmi.toFixed(2);
  
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
      document.getElementById('bmiCategory').className = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
      document.getElementById('bmiCategory').className = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
      document.getElementById('bmiCategory').className = 'overweight';
    } else {
      category = 'Obese';
      document.getElementById('bmiCategory').className = 'obese';
    }
  
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('result').style.display = 'block';
  });
  