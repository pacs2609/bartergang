// server/api/auth/login.post.ts
import { defineEventHandler, readBody, createError, setCookie } from 'h3';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event); // Expect 'username'

  // 1. Basic input validation
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: 'Username and password are required.',
    });
  }

  // 2. Simulate User Lookup from a Database
  // In a real application, you would query your database here:
  // const user = await db.collection('users').findOne({ username });

  // --- START: Dummy User for Demonstration ---
  // A dummy user object. In a real app, this would come from your DB.
  // The 'hashedPassword' would be the result of bcrypt.hash() when the user registered.
  const dummyUser = {
    id: 1,
    username: 'test',
    hashedPassword: await bcrypt.hash('1234', 10), // Hash a dummy password for comparison
    firstname: 'User',
    email : 'dev@dev.com',
    avatar : '/newimg/avatar2.png',
    address : 'Kingston, 5236, United State',
    phone : '0888888888',
    bbcoin:1000000,
    tmccoin:1000000,
    lastname: 'Test',
    memberType : 'shop'
  };

  // Replace this with your actual database lookup
  const user = dummyUser.username === username ? dummyUser : null;
  // --- END: Dummy User for Demonstration ---

  // 3. User existence and password verification
  if (!user || !(await bcrypt.compare(password, user.hashedPassword))) {
    throw createError({
      statusCode: 401,
      message: 'Invalid username or password.', // Specific error message
    });
  }

  // 4. Generate JWT Token
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    console.error('JWT_SECRET is not defined in environment variables!');
    throw createError({
      statusCode: 500,
      message: 'Server configuration error.',
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email : user.email,
      address : user.address,
      phone : user.phone,
      avatar : user.avatar,
      bbcoin: user.bbcoin,
      tmccoin: user.tmccoin,
      memberType : user.memberType
    }, // Payload for the token
    jwtSecret,
    { expiresIn: '1h' } // Token expires in 1 hour
  );

  // 5. Set HTTP-Only, Secure Cookie
  // This is the most secure way to store tokens in a browser.
  // The browser automatically sends this cookie with subsequent requests to your domain.
  // JavaScript cannot access this cookie directly, preventing XSS attacks from stealing it.
  setCookie(event, 'auth_token', token, {
    httpOnly: true, // Prevents client-side JS from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
    maxAge: 60 * 60, // Cookie expires in 1 hour (matching token expiry)
    path: '/', // Cookie is valid for all paths in your domain
    sameSite: 'lax', // Protects against some CSRF attacks
  });

  // 6. Return success response (don't send token back in response if using HTTP-only cookies)
  return {
    message: 'Login successful',
    user: {
      id: user.id as number,
      username: user.username as string,
      firstname: user.firstname as string,
      lastname: user.lastname as string,
      email : user.email as string,
      address : user.address as string,
      phone : user.phone as string,
      avatar : user.avatar as string,
      bbcoin: user.bbcoin as number,
      tmccoin: user.tmccoin as number,
      memberType : user.memberType as string
    },
    // You might optionally return the token for debugging or if client-side storage is also used
    // but generally not recommended with httpOnly cookies.
    token: token,
  };
});