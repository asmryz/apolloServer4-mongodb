const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

const studentSchema = new Schema({
    regno: String,
    name: String,
    // marks:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Mark'
    // }]
});

exports.Student = model("Student", studentSchema);
