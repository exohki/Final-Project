import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import MealPlanner from './pages/MealPlanner';
import About from './pages/About';
import SavedRecipes from './pages/SavedRecipes';
import { requestNotificationPermission } from './utils/notifications';

const App = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={<Home savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} />}
        />
        <Route path="/planner" element={<MealPlanner />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/saved-recipes"
          element={<SavedRecipes savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
