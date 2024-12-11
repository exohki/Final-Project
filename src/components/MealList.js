import React from 'react';

const MealList = ({ meals, onDelete }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          {meal.day}: {meal.meal}
          <button onClick={() => onDelete(meal.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MealList;
