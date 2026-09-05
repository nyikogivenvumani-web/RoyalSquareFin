const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET: Fetch all policies
app.get('/api/policies', async (req, res) => {
  try {
    const policies = await prisma.policy.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(policies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch policies' });
  }
});

// POST: Add a new policy
app.post('/api/policies', async (req, res) => {
  try {
    const { name, type, provider, premium, coverageAmount, status, startDate, expiryDate } = req.body;
    
    // Auto-generate policy reference number
    const policyNumber = `POL-${Math.floor(1000 + Math.random() * 9000)}-ZA`;

    const newPolicy = await prisma.policy.create({
      data: {
        policyNumber,
        name,
        type,
        provider,
        premium,
        coverageAmount,
        status: status || 'Active',
        startDate: new Date(startDate),
        expiryDate: new Date(expiryDate),
      },
    });

    res.status(201).json(newPolicy);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});

// DELETE: Remove a policy
app.delete('/api/policies/:id', async (req, res) => {
  try {
    await prisma.policy.delete({ where: { id: req.params.id } });
    res.json({ message: 'Policy deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete policy' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));