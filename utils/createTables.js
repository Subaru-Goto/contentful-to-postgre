import { pool } from "../db/pool.js";
import { createRecipeTableQuery } from "../db/createRecipeTable.js";
import { createMethodTableQuery } from "../db/createMethodTable.js";
import { createIngredientsTableQuery } from "../db/createIngredientsTable.js";

export const createRecipeTable = async () => {
  try{
    const { rows: table } = await pool.query(createRecipeTableQuery);
    console.log(table);
  } catch(error) {
    throw new Error(error.message)
  }
};

export const createMethodTable = async (req, res) => {
  try{
    const { rows: table } = await pool.query(createMethodTableQuery);
    console.log(table);
  } catch(error) {
    throw new Error(error.message)
  }
};

export const createIngredientsTable = async (req, res) => {
  try{
    const { rows: table } = await pool.query(createIngredientsTableQuery);
    console.log(table);
  } catch(error) {
    throw new Error(error.message)
  }
};