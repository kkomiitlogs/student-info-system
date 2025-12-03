import mongoose from "mongoose";
// --- 1. Sub-Schema for Course Enrollment ---
const courseEnrollmentSchema = new mongoose.Schema(
    {
        courseCode: {
            type: String,
            required: true
        },
        grades: {
            type: [Number], 
            default: []  
        },
        enrollmentDate: {
            type: Date,
            default: Date.now
        }
    },
    { _id: false }
);

// --- 2. Main Student Information Schema ---
const studentInformationSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true 
        },
        // The unique ID used to identify the student in the API (e.g., 101)
        studentId: {
            type: String,
            required: true,
            unique: true // Ensures only one student document per student ID
        },
        coursesEnrolled: {
            type: [courseEnrollmentSchema],
            default: []
        }
    },
    { timestamps: true }
);

const StudentInformation = mongoose.model(
    "StudentInformation", 
    studentInformationSchema
);

export default StudentInformation;
