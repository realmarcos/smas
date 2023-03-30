import express from "express";
import "./bootstrap";
const app = express();

app.listen(process.env.PORT, () => {
	console.log(`Server started on port: ${process.env.PORT}`);
});