export const createIngredientsTableQuery = `
    CREATE TABLE IF NOT EXISTS ingredients (
        id SERIAL PRIMARY KEY,
        ingredient_num INT,
        ingredients VARCHAR(500),
        recipeId INT,
        FOREIGN KEY (recipeId) REFERENCES recipes(id)
    );
`