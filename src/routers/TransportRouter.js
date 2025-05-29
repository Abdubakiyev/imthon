import { Router } from "express";
import { TransportController } from "../controllers/TransportController.js";
import checkToken from "../middleware/checkToken.js";

const TransportRouter = Router();

TransportRouter.post("/transport", checkToken(["SuperAdmin", "Admin"], "addTransport"), TransportController.addTransport);
TransportRouter.put("/transport/:id", checkToken(["SuperAdmin", "Admin"], "changeTransport"), TransportController.changeTransport);
TransportRouter.delete("/transport/:id", checkToken(["SuperAdmin", "Admin"], "deleteTransport"), TransportController.deleteTransport);
TransportRouter.get("/transport", checkToken(["SuperAdmin", "Admin"], "transports"), TransportController.getAllTransports);
TransportRouter.get("/transport/:id", checkToken(["SuperAdmin", "Admin"], "transports"), TransportController.getTransportById);

export default TransportRouter;
