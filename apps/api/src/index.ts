import express from "express";

import type {Request, Response, Express} from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
	res.send("hello from express");
});

app.listen(8080, () => console.log("server listening on port 8080"));
