import "dotenv/config";
import { 
  createRecipeTable,
  createMethodTable,
  createIngredientsTable } from "./utils/createTables.js";
import { insertRecipes, insertMethods, insertIngredients } from "./utils/insertData.js";
import { getDataFromContentful } from "./utils/downloadData.js";

// Table already created !
//
// async function createTables(isTableCreated=true) {
//   if(!isTableCreated) {
//     await createRecipeTable();
//     await createMethodTable();
//     await createIngredientsTable();
//   }
// }
// createTables();

const data = await getDataFromContentful();
//insertRecipes(data);
//insertMethods(data);
//insertIngredients(data);


