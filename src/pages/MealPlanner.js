import React, { useState, useEffect } from "react";
import { addMeal, deleteMeal, getMeals } from "../utils/meals";
import { notifyMealDeleted, confirmMealDeletion } from "../utils/notifications";

const MealPlanner = () => {
  const [mealList, setMealList] = useState([]);
  const [newMeal, setNewMeal] = useState({
    name: "",
    description: "",
    date: "",
    ingredientsLink: ""
  });
  const [editDateId, setEditDateId] = useState(null);
  const [editUrlId, setEditUrlId] = useState(null);
  const [tempUrl, setTempUrl] = useState("");

  useEffect(() => {
    setMealList(getMeals());
  }, []);

  const handleAddMeal = () => {
    if (newMeal.name && newMeal.description && newMeal.date) {
      addMeal(newMeal);
      setMealList(getMeals());
      setNewMeal({ name: "", description: "", date: "", ingredientsLink: "" });
    } else {
      alert("Please fill in all fields before adding a meal.");
    }
  };

  const handleDeleteMeal = (mealId) => {
    const mealToDelete = mealList.find((meal) => meal.id === mealId)?.name || "this meal";

    confirmMealDeletion(
      mealToDelete,
      () => {
        deleteMeal(mealId);
        setMealList(getMeals());
        notifyMealDeleted(mealToDelete);
      },
      () => console.log("Deletion canceled.")
    );
  };

  const handleDateChange = (mealId, newDate) => {
    setMealList((prev) =>
      prev.map((meal) => (meal.id === mealId ? { ...meal, date: newDate } : meal))
    );
    setEditDateId(null); // Close the edit mode
  };

  const handleUrlChange = (mealId) => {
    setMealList((prev) =>
      prev.map((meal) =>
        meal.id === mealId ? { ...meal, ingredientsLink: tempUrl } : meal
      )
    );
    setEditUrlId(null); // Close the URL edit mode
    setTempUrl(""); // Reset temporary URL state
  };

  return (
    <main>
      <h1>Meal Planner</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newMeal.name}
          onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
          placeholder="Meal name"
          style={{ margin: "10px", padding: "10px", width: "80%" }}
        />
        <input
          type="text"
          value={newMeal.description}
          onChange={(e) => setNewMeal({ ...newMeal, description: e.target.value })}
          placeholder="Meal description"
          style={{ margin: "10px", padding: "10px", width: "80%" }}
        />
        <input
          type="date"
          value={newMeal.date}
          onChange={(e) => setNewMeal({ ...newMeal, date: e.target.value })}
          style={{ margin: "10px", padding: "10px" }}
        />
        <input
          type="url"
          value={newMeal.ingredientsLink}
          onChange={(e) => setNewMeal({ ...newMeal, ingredientsLink: e.target.value })}
          placeholder="Ingredients link (URL)"
          style={{ margin: "10px", padding: "10px", width: "80%" }}
        />
        <button onClick={handleAddMeal} style={{ margin: "10px" }}>Add Meal</button>
      </div>

      <div className="card-container">
        {mealList.map((meal) => (
          <div className="card" key={meal.id}>
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
            {editUrlId === meal.id ? (
              <div>
                <input
                  type="url"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="Enter new URL"
                  style={{ margin: "10px", padding: "10px", width: "80%" }}
                />
                <button onClick={() => handleUrlChange(meal.id)}>Save URL</button>
                <button onClick={() => setEditUrlId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {meal.ingredientsLink ? (
                  <p>
                    <a
                      href={meal.ingredientsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#DC6D18", textDecoration: "underline" }}
                    >
                      View Ingredients
                    </a>
                  </p>
                ) : (
                  <p>No URL provided</p>
                )}
                <button onClick={() => {
                  setEditUrlId(meal.id);
                  setTempUrl(meal.ingredientsLink || "");
                }}>
                  Edit URL
                </button>
              </div>
            )}
            <div className="meal-date-buttons">
              <div className="meal-date">
                <label>Date:</label>
                {editDateId === meal.id ? (
                  <input
                    type="date"
                    value={meal.date || ""}
                    onChange={(e) => handleDateChange(meal.id, e.target.value)}
                    style={{ margin: "10px", padding: "10px" }}
                  />
                ) : (
                  <p>{meal.date || "No date selected"}</p>
                )}
              </div>
              <div className="meal-buttons">
                {editDateId === meal.id ? (
                  <button onClick={() => setEditDateId(null)}>Cancel</button>
                ) : (
                  <button onClick={() => setEditDateId(meal.id)}>Edit Date</button>
                )}
                <button onClick={() => handleDeleteMeal(meal.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MealPlanner;
