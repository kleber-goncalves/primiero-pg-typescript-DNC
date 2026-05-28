import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import PostRequest from "./dtos/postRequest";
import PostHandler from './utils/postHandler';
dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.post("/", (req: Request, res: Response) => {
    const body: PostRequest = req.body;
    const response = PostHandler.buildResponse(body);
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
