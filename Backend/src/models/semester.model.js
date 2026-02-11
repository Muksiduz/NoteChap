import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
  {
    SemesterNumber: {
      type: Number,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Semester = mongoose.model("Semester", semesterSchema);

export default Semester;
