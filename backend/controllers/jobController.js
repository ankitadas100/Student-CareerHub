
const Job = require("../models/job");


const createJob = async (req, res) => {
    try {
        const {
            title,
            company,
            location,
            type,
            description,
            salary,
            skills,
            applicationDeadline,
            applyLink
        } = req.body;

        
        if (!title || !company || !type || !description) {
            return res.status(400).json({
                success: false,
                message: "Title, company, type, and description are required."
            });
        }

        
        if (!["Job", "Internship"].includes(type)) {
            return res.status(400).json({
                success: false,
                message: "Type must be Job or Internship."
            });
        }

        
        const job = await Job.create({
            title,
            company,
            location,
            type,
            description,
            salary,
            skills,
            applicationDeadline,
            applyLink
        });

        return res.status(201).json({
            success: true,
            message: "Job or internship created successfully.",
            job
        });

    } catch (error) {
        console.error("Create job error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to create job."
        });
    }
};



const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: jobs.length,
            jobs
        });

    } catch (error) {
        console.error("Get jobs error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch jobs."
        });
    }
};



const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job or internship not found."
            });
        }

        return res.status(200).json({
            success: true,
            job
        });

    } catch (error) {
        console.error("Get job error:", error.message);

        return res.status(400).json({
            success: false,
            message: "Invalid job ID."
        });
    }
};


module.exports = {
    createJob,
    getAllJobs,
    getJobById
};
