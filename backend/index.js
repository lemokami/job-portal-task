const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/jobs', async (req, res) => {
  try {
    const { title, location, jobType, minSalary, maxSalary } = req.query;
    const jobs = await prisma.job.findMany({
      where: {
        title: title ? { contains: title, mode: 'insensitive' } : undefined,
        location: location
          ? { contains: location, mode: 'insensitive' }
          : undefined,
        jobType: jobType || undefined,
        salaryRange: {
          gte: minSalary ? parseInt(minSalary) : undefined,
          lte: maxSalary ? parseInt(maxSalary) : undefined,
        },
      },
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.get('/jobs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const job = await prisma.job.findUnique({ where: { id: parseInt(id) } });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

app.post('/jobs', async (req, res) => {
  try {
    const {
      title,
      companyName,
      location,
      jobType,
      salaryRange,
      description,
      requirements,
      responsibilities,
      applicationDeadline,
    } = req.body;

    const newJob = await prisma.job.create({
      data: {
        title,
        companyName,
        location,
        jobType,
        salaryRange,
        description,
        requirements,
        responsibilities,
        applicationDeadline: new Date(applicationDeadline),
      },
    });
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
