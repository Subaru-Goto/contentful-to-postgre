export const createMethodTableQuery = `
    CREATE TABLE IF NOT EXISTS methods (
        id SERIAL PRIMARY KEY,
        steps INT,
        todo VARCHAR(500),
        recipeId INT,
        FOREIGN KEY (recipeId) REFERENCES recipes(id)
    );
`