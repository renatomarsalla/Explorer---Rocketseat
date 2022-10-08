

require("express-async-errors");
const { AppError } = require("./utils/AppError");
const express = require("express");
const { migrateRun } = require("./database/sqlite/migrations/index");
const { routes } = require("./routes/index");
const uploadConfig = require("./configs/uploads.js")
const cors = require("cors");

// const PORT = 3000;
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

migrateRun();

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      "status": "error",
      "message": error.message
    })
  }

  console.error(error);

  return response.status(500).json({
    "status": "error",
    "message": "Internal Server Error"
  })
});


app.listen(PORT, () => console.log(`Listening the port ${PORT}`));