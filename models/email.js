// import { Schema, models, model } from 'mongoose';
var mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  emailtemp: {
    type: String,
    require:true
  },
});



export default mongoose.models.Emailtemp ||
  mongoose.model("Emailtemp", NoteSchema);
