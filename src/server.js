import express from "express"
import "dotenv/config"
import { connectDB } from "./config/Database.js"
import fileUpload from "express-fileupload";
import logger from "./logs/logger.js"
import MainRouter from "./routers/MainRouter.js"

const app = express()

await connectDB()
app.use(fileUpload())
app.use(express.json()) 


app.use(MainRouter.UserRouter)
app.use(MainRouter.BranchRouter)
app.use(MainRouter.StuffRouter)
app.use(MainRouter.TranportRouter)
app.use(MainRouter.AdminRouter)
app.use(MainRouter.PermissionRouter)

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Internal server error";
  
    if (status < 500) {
      return res.status(status).json({
        status,
        message
      });
    }
  
    logger.error(error); 
  
    res.status(500).json({
      status: 500,
      message: "Internal server error"
    });
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
