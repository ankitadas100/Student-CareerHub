
const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: true,
        trim: true
    },
    company: {
        type: String,
        requried: true,
        trim: true
    },
    location: {
        type: String,
        default: "not specified"
    },
    type: {
        type: String,
        enum: ["Job", "Internship"],
        required: true
    },

    description: {
        type: String,
        required: true
    },

    salary: {
        type: String,
        default: "Not disclosed"
    },

    skills: {
        type: [String],
        default: []
    },

    applicationDeadline: {
        type: Date,
        default: null
    },

    applyLink: {
        type: String,
        default: ""
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Job", jobSchema);
