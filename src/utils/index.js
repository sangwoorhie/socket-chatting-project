const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
