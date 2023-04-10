const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    // studentInfo:
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // },
    name: String,
    rollno: String,
    courseCode: String,
    courseName: String,
    markedTime: Date
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;