import { openDB } from 'idb';

export const initDB = async () => {
  const db = await openDB('MealDB', 1, {
    upgrade(db) {
      db.createObjectStore('meals', { keyPath: 'id', autoIncrement: true });
    },
  });
  return db;
};

export const addMeal = async (meal) => {
  const db = await initDB();
  return await db.put('meals', meal);
};

export const getMeals = async () => {
  const db = await initDB();
  return await db.getAll('meals');
};

export const deleteMeal = async (id) => {
  const db = await initDB();
  return await db.delete('meals', id);
};
