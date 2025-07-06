"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
];
// get all posts
router.get("/json", (req, res) => {
    res.json(posts);
});
// get 1 post
router.get("/json/:id", (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});
exports.default = router;
