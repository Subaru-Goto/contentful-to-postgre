import "dotenv/config";
import { 
  createRecipeTable,
  createMethodTable,
  createIngredientsTable } from "./utils/createTables.js";
import { insertRecipes, insertMethods, insertIngredients } from "./utils/insertData.js";
import { getDataFromContentful } from "./utils/downloadData.js";

// Table already created !
//
// function createTables(isTableCreated=true) {
//   if(!isTableCreated) {
//     createRecipeTable();
//     createMethodTable();
//     createIngredientsTable();
//   }
// }
// createTables();

const data = await getDataFromContentful();
//insertRecipes(data);
//insertMethods(data);
//insertIngredients(data);


