// server/api/auth/logout.post.ts
import { defineEventHandler, deleteCookie } from 'h3';

export default defineEventHandler((event) => {
  // Delete the 'auth_token' cookie to log the user out
  deleteCookie(event, 'auth_token', { path: '/' });

  return {
    message: 'Logged out successfully',
  };
});