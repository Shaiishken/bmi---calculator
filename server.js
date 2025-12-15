const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('BMI Calculator API is running');
});

app.post('/bmi', (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res.status(400).json({
      error: 'Please provide weight and height'
    });
  }

  const bmi = weight / (height * height);

  let category;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  res.json({
    bmi: bmi.toFixed(2),
    category
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
