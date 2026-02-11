import mongoose from "mongoose";

const topicPerformanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    accuracyPercentage: {
      type: Number,
      default: 0,
    },

    totalAttempts: {
      type: Number,
      default: 0,
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const TopicPerformance = mongoose.model(
  "TopicPerformance",
  topicPerformanceSchema,
);

export default TopicPerformance;
