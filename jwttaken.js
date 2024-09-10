import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign({ id: user.id }, 'khushbualawa', { expiresIn: '365d' });
};
