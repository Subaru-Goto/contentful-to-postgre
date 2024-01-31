import pkg from 'contentful';
const { createClient } = pkg;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});

export const getDataFromContentful = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "recipes",
      select: "fields",
      order: "fields.title",
    });

    const sanitizedEntries = entries.items.map(item => {
      const picture = item.fields.picture.fields;
      return {
        ...item.fields,
        picture
      }
    });

    const cleanedData = sanitizedEntries.map(item => ({
      title: item.title,
      pictureUrl: "https:" + item.picture.file.url,
      subheading: item.subheading,
      description: item.description,
      ingredients: item.ingredients,
      method: item.method,
      type: item.type,
      preptimeInMinutes: item.preptimeInMinutes
    }));

    return cleanedData;
  } catch (error) {
    console.error(error);
    return null;
  }
};