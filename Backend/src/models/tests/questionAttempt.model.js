import mongoose from "mongoose";

const questionAttemptSchema = new mongoose.Schema(
  {
    testAttempt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestAttempt",
      required: true,
    },

    mcq: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MCQ",
      required: true,
    },

    selectedOptionIndex: {
      type: Number,
      required: true,
    },

    isCorrect: {
      type: Boolean,
      required: true,
    },

    timeTakenSeconds: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const QuestionAttempt = mongoose.model(
  "QuestionAttempt",
  questionAttemptSchema,
);

export default QuestionAttempt;
