"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
let posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
];
app.get("/json", (req, res) => {
    res.json(posts);
});
// start server
app.listen(port, () => {
    console.log("starting server...");
    console.log(`running on ${port}`);
});
