const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secure_secret_key';

// Login route handler
async function handleLogin(req, res) {
  const { email, password } = req.body;
  
  // Database lookup simulation for user
  const user = await db.findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Issue token containing user ID and authorization role
  const token = jwt.sign(
    { userId: user.id, role: user.role }, 
    JWT_SECRET, 
    { expiresIn: '8h' }
  );

  res.json({ token, role: user.role, name: user.name });
}