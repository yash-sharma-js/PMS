"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true, minlength: [3, "username should have MinLength of 3"] },
    fullName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
    },
    bio: { type: String, required: false, default: "" },
    role: { type: String, required: false },
    email: { type: String, required: true, unique: true, trim: true },
    contact: { type: Number, required: false, trim: true },
    profilePic: { type: String, required: false, default: "" },
    location: { type: String, required: false, default: "" },
    password: { type: String, required: true, minlength: [6, "password should have MinLength of 6"], select: false },
    friendsId: [{ type: mongoose_1.default.Schema.Types.ObjectId, required: false }],
    projectId: [{ type: mongoose_1.default.Schema.Types.ObjectId, required: false }],
    socketId: { type: String, required: false },
    activeYN: { type: Boolean, required: false, default: true },
}, { timestamps: true });
UserSchema.methods.generateAuthToken = function () {
    return jsonwebtoken_1.default.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
};
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt_1.default.compare(password, this.password);
};
UserSchema.statics.hashPassword = async function (password) {
    return await bcrypt_1.default.hash(password, 10);
};
const UserModel = mongoose_1.default.model("user", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map