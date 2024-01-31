import { pool } from "../db/pool.js";

export const insertRecipes = async (data) => {
  for (let recipe of data) {
    const {title, pictureUrl, subheading, description, type, preptimeInMinutes} = recipe;
    await pool.query(
      `INSERT INTO recipes
      ("title", "pictureurl", "subheading", "description", "type", "preptimeinminutes")
      VALUES($1, $2, $3, $4, $5, $6)
     `, [title, pictureUrl, subheading, description, type, preptimeInMinutes]);
  }
};

export const insertMethods = async (data) => {
  for (let i = 0; i < data.length; i++) {
    // Extract each element from array
    const steps = data[i].method.map((item, index) => index + 1);
    const todos = data[i].method.map((item) => item);

    for (let j = 0; j < steps.length; j++) {
      await pool.query(
        `INSERT INTO methods
        ("steps", "todo", "recipeid")
        VALUES($1, $2, $3)
       `, [steps[j], todos[j], i + 1]);
    }
  }
};

export const insertIngredients = async (data) => {
  for (let i = 0; i < data.length; i++) {
    // Extract each element from array
    const ingredient_num = data[i].ingredients.map((item, index) => index + 1);
    const ingredients = data[i].ingredients.map((item) => item);

    for (let j = 0; j < ingredient_num.length; j++) {
      await pool.query(
        `INSERT INTO ingredients
        ("ingredient_num", "ingredients", "recipeid")
        VALUES($1, $2, $3)
       `, [ingredient_num[j], ingredients[j], i + 1]);
    }
  }
};