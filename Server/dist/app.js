"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const connection_1 = __importDefault(require("./Config/connection"));
//Imports Routes
const user_route_1 = __importDefault(require("./User/Routes/user.route"));
const project_route_1 = __importDefault(require("./Project/Routes/project.route"));
const task_route_1 = __importDefault(require("./Task/Routes/task.route"));
const user_middleware_1 = require("./User/middlewares/user.middleware");
const log_1 = require("./Logger/log");
// Initialise app
const app = (0, express_1.default)();
//Connection to MongoDB
(0, connection_1.default)(process.env.MONGO_URL);
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.end("Server is Running");
});
app.use('/api/user', log_1.logRequest, user_route_1.default);
app.use('/api/project', log_1.logRequest, project_route_1.default);
app.use('/api/task', log_1.logRequest, user_middleware_1.authUser, task_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map