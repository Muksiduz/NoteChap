import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  },
  {
    timestamps: true,
  },
);

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;
