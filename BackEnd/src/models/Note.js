import mongoose from "mongoose";

// 1-create schema
// 2-model based on that schema

const noteSchema = new mongoose.Schema(
    {
        title:{type:String, required: true},
        content:{type:String, required: true},
    },
    {timestamps: true} // it will auto create in mongodb as 'createdAt', 'updatedAt'
)

// const Note = mongoose.model("Note", noteSchema);
const Note = mongoose.model("Note", noteSchema);

export default Note;