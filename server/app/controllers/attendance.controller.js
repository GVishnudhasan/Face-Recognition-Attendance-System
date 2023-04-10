const db = require("../models");
const Attendance = db.attendance;
const User = db.user

exports.markAttendance = async (req, res) => {

    const student = await User.findById(req.body.studentId);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    console.log(student);
    const attendance = new Attendance({
        name: student.name,
        rollno: student.rollno,
        courseCode: req.body.courseCode,
        courseName: req.body.courseName,
        markedTime: new Date()
    });

    // console.log(attendance);

    try {
        const newAttendance = await attendance.save();
        res.status(201).json(newAttendance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};