import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    departmentPeople: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    semesters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Semester",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;
