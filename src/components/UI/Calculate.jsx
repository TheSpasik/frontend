import React, { useState } from "react";
import "../../styles/calculate.css";

const Calculate = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);
  const [hasError, setHasError] = useState(false);
  const handleHeightChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value >= 0) {
      // Check for non-negative number
      setHeight(value);
      setHasError(false); // Reset error on valid input
    } else {
      setHasError(true);
    }
  };

  const handleWeightChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value >= 0) {
      // Check for non-negative number
      setWeight(value);
      setHasError(false); // Reset error on valid input
    } else {
      setHasError(true);
    }
  };

  const calculateBmi = () => {
    if (height > 0 && weight > 0) {
      const bmiValue = weight / ((height / 100) * (height / 100));
      setBmi(bmiValue.toFixed(2));

      // Determine BMI category
      let category, color;
      if (bmiValue < 18.5) {
        category = "Underweight";
        color = "yellow";
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        category = "Healthy Weight";
        color = "green";
      } else if (bmiValue >= 25 && bmiValue < 30) {
        category = "Overweight";
        color = "yellow";
      } else {
        category = "Obese";
        color = "red";
      }
      setBmiCategory(category);
      setColor(color);
    }
  };

  const [color, setColor] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateBmi();
  };
  return (
    <section id="calculate">
      <div className="calculate__container container grid">
        <div className="calculate__content">
          <div className="section__titles">
            <h1 className="section__title-border">Calculate</h1>
            <h1 className="section__title">Your BMI</h1>
          </div>
          <p className="calculate__description">
            The body mass index (BMI) calculator calculates body mass index from
            your weight and height.
          </p>
          <form
            action=""
            className="calculate__form"
            id="calculte-form"
            onSubmit={handleSubmit}
          >
            <div className="calculate__box-input">
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Height (cm)"
                  className="calculate__input"
                  id="calculate-cm"
                  onChange={handleHeightChange}
                />
              </div>

              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  className="calculate__input"
                  id="calculate-kg"
                  onChange={handleWeightChange}
                />
              </div>
            </div>
            <button type="submit" className="button button__flex">
              Calculate Now <i className="ri-arrow-right-fill"></i>
            </button>
          </form>
          {bmi && (
            <p className={`calculate__message calculate__message--${color}`}>
              Your BMI is: {bmi} ({bmiCategory})
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculate;
