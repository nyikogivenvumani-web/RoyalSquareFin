import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'royal_square_secure_jwt_key_2026';

app.use(cors());
app.use(express.json());

// --- LOCAL IN-MEMORY DATABASE ---
const localDb = {
  users: [
    {
      id: "u-nyiko-001",
      email: "nyiko@royalsquare.co.za",
      name: "Nyiko",
      role: "client",
      // password is 'password123' (hashed or plain fallback supported)
      password: "password123" 
    }
  ],
  assets: [
    { id: "a1", userId: "u-nyiko-001", name: 'Royal Square Balanced Growth Fund', type: 'Equities', provider: 'Allan Gray', value: 420000, returns: '+8.4%' },
    { id: "a2", userId: "u-nyiko-001", name: 'SME Commercial Expansion Fleet', type: 'Property & Asset', provider: 'Santam', value: 380000, returns: '+5.2%' },
    { id: "a3", userId: "u-nyiko-001", name: 'High-Yield Liquidity Reserve', type: 'Cash Equivalents', provider: 'Old Mutual', value: 230000, returns: '+10.1%' },
    { id: "a4", userId: "u-nyiko-001", name: 'SA Treasury Inflation-Linked Bonds', type: 'Fixed Income', provider: 'Liberty', value: 200000, returns: '+7.6%' },
    { id: "a5", userId: "u-nyiko-001", name: 'Global Tech Innovation Index', type: 'Equities', provider: 'Discovery', value: 220000, returns: '+14.2%' }
  ],
  policies: [
    { id: "p1", userId: "u-nyiko-001", name: 'Life & Disability Protection', expiryDate: '2026-12-15', status: 'Active', policyNumber: 'POL-1001-ZA' },
    { id: "p2", userId: "u-nyiko-001", name: 'Commercial Asset Cover', expiryDate: '2026-09-12', status: 'Expiring Soon', policyNumber: 'POL-1002-ZA' },
    { id: "p3", userId: "u-nyiko-001", name: 'Short-Term Machinery Warranty', expiryDate: '2026-08-28', status: 'Lapsed', policyNumber: 'POL-9082-ZA' }
  ],
  goals: [
    { id: "g1", userId: "u-nyiko-001", name: 'Emergency Fund', current: 75000, target: 100000 },
    { id: "g2", userId: "u-nyiko-001", name: 'Property Investment', current: 400000, target: 1000000 }
  ],
  liabilities: [
    { id: "l1", userId: "u-nyiko-001", name: 'Equipment Financing Loan', amount: 150000 }
  ]
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

// Login Endpoint (Local)
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = localDb.users.find(u => u.email === email);

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role || 'client', name: user.name },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      token,
      role: user.role || 'client',
      name: user.name
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Protected Dashboard Endpoint (Local)
app.get('/api/dashboard', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const isAdmin = req.user.role === 'admin';

    const assets = isAdmin ? localDb.assets : localDb.assets.filter(a => a.userId === userId);
    const policies = isAdmin ? localDb.policies : localDb.policies.filter(p => p.userId === userId);
    const goalsFromDb = isAdmin ? localDb.goals : localDb.goals.filter(g => g.userId === userId);
    const liabilitiesFromDb = isAdmin ? localDb.liabilities : localDb.liabilities.filter(l => l.userId === userId);

    const totalAssets = assets.reduce((acc, item) => acc + Number(item.value || 0), 0);
    const totalLiabilities = liabilitiesFromDb.reduce((acc, item) => acc + Number(item.amount || 0), 0);
    const totalNetWorth = totalAssets - totalLiabilities;

    const activePolicies = policies.filter(p => p.status?.toLowerCase() === 'active');
    const expiringSoonPolicies = policies.filter(p => p.status?.toLowerCase().includes('expiring'));

    const goals = goalsFromDb.map(g => ({
      id: g.id,
      name: g.name,
      current: Number(g.current || 0),
      target: Number(g.target || 1),
      progress: Math.min(Math.round((Number(g.current || 0) / Number(g.target || 1)) * 100), 100)
    }));

    const lapsedPolicies = policies.filter(p => p.status?.toLowerCase() === 'lapsed' || p.status?.toLowerCase() === 'expired');
    const recentlyExpired = lapsedPolicies.length > 0 ? lapsedPolicies[0] : {
      name: 'Short-Term Machinery Warranty',
      type: 'Equipment',
      expiryDate: '28 August 2026',
      policyNumber: 'POL-9082-ZA'
    };

    res.json({
      name: req.user.name || 'Nyiko',
      netWorth: {
        total: totalNetWorth,
        changePercentage: 4.8,
        assets: totalAssets,
        liabilities: totalLiabilities,
      },
      activePoliciesCount: activePolicies.length,
      expiringSoonCount: expiringSoonPolicies.length,
      policies: policies.slice(0, 4),
      recentlyExpiredPolicy: {
        name: recentlyExpired.name,
        type: recentlyExpired.type || 'Equipment',
        expiredOn: recentlyExpired.expiryDate,
        reference: recentlyExpired.policyNumber || 'POL-9082-ZA',
      },
      goals
    });
  } catch (err) {
    console.error('Dashboard Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Protected Portfolio Endpoint (Local)
app.get('/api/portfolio', verifyToken, async (req, res) => {
  try {
    const assets = req.user.role === 'admin' 
      ? localDb.assets 
      : localDb.assets.filter(a => a.userId === req.user.userId);

    const totalValue = assets.reduce((acc, item) => acc + Number(item.value || 0), 0);
    const monthlyYield = Math.round(totalValue * 0.0085);

    res.json({
      totalValue,
      monthlyYield,
      allocation: [
        { category: 'Equities & Money Market', amount: totalValue * 0.45, percentage: 45, color: 'bg-amber-300' },
        { category: 'Commercial Property & Assets', amount: totalValue * 0.33, percentage: 33, color: 'bg-blue-500' },
        { category: 'Fixed Income & Bonds', amount: totalValue * 0.14, percentage: 14, color: 'bg-emerald-400' },
        { category: 'Cash & Liquidity Reserves', amount: totalValue * 0.08, percentage: 8, color: 'bg-purple-400' }
      ],
      assets
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Protected Policies Endpoints (Local)
app.get('/api/policies', verifyToken, async (req, res) => {
  try {
    const policies = req.user.role === 'admin'
      ? localDb.policies
      : localDb.policies.filter(p => p.userId === req.user.userId);

    res.json(policies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/policies', verifyToken, async (req, res) => {
  try {
    const newPolicy = {
      id: 'p-' + Date.now(),
      userId: req.user.userId,
      ...req.body
    };

    localDb.policies.push(newPolicy);
    res.status(201).json(newPolicy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Local mock server running smoothly on http://localhost:${PORT}`);
});