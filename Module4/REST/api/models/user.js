import { Schema, model } from "mongoose";

const userSchema = Schema({
_id: Schema.Types.ObjectId,
username: { type: String, required: true, unique: true },
password: { type: String, required: true }
});


export default model("User", userSchema);