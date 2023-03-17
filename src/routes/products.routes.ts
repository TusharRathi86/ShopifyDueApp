import express, {Request, Response} from "express";
const router = express.Router();
import { verify } from "../middlewares/shopifyAuth"; 

router.get("/", verify);
router.get("/dashboard", (req: Request, res: Response) => {
    res.send("HERE IS THE PRODUCT DASHBOARD!!")
})

export { router };