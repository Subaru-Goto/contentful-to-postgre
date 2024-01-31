export const createRecipeTableQuery = `
    CREATE TABLE IF NOT EXISTS recipes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        pictureUrl VARCHAR(255),
        subheading VARCHAR(500),
        description VARCHAR(500),
        type VARCHAR(255),
        preptimeInMinutes INT
    );
`

