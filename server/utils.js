import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'littlesecretswetellourselves',
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '2d',
    }
  );
};
