const contentful = require("contentful");

const client = contentful.createClient({
  space: "6w7ez5o8i8ir",
  accessToken: "6VdOujKPNjbwcOVmlwxXjmggJnoOCsvMY3daF3_UTuc",
});

const getAssets = () => client.getAssets().then((data) => data);

export { getAssets };
