import React, { useState } from 'react';

const AddMeal = ({ onAdd }) => {
  const [meal, setMeal] = useState('');
  const [day, setDay] = useState('Monday');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (meal.trim()) {
      onAdd({ day, meal });
      setMeal('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add a meal"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
      />
      <button type="submit">Add Meal</button>
    </form>
  );
};

export default AddMeal;
