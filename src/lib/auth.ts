import { db } from './db';
import { User } from '../types';

const AUTH_TOKEN_KEY = 'infrasoko_auth_token';

// Initial users to seed the database
const initialUsers: User[] = [
  {
    id: '1',
    email: 'admin@infrasoko.com',
    role: 'admin',
    full_name: 'Admin User',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'client@example.com',
    role: 'client',
    full_name: 'John Client',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    email: 'contractor@example.com',
    role: 'contractor',
    full_name: 'Sarah Contractor',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    email: 'consultant@example.com',
    role: 'consultant',
    full_name: 'Mike Consultant',
    created_at: new Date().toISOString(),
  },
];

// Initialize the database with seed data
export async function initializeAuth() {
  await db.init();
  
  // Check if users exist
  const existingUsers = await db.getAll<User>('users');
  if (existingUsers.length === 0) {
    // Seed initial users
    for (const user of initialUsers) {
      await db.put('users', user);
    }
  }

  // Check for existing auth token
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    try {
      const user = await getUserFromToken(token);
      return user;
    } catch (error) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }
  }
  return null;
}

// Generate a simple token (in production, use a proper JWT library)
function generateToken(user: User): string {
  return btoa(JSON.stringify({
    id: user.id,
    email: user.email,
    exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours expiration
  }));
}

// Verify and decode token
async function getUserFromToken(token: string): Promise<User | null> {
  try {
    const decoded = JSON.parse(atob(token));
    
    // Check token expiration
    if (decoded.exp < Date.now()) {
      throw new Error('Token expired');
    }

    // Get user from database
    const user = await db.get<User>('users', decoded.id);
    return user || null;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export async function signIn(email: string, password: string): Promise<User> {
  const user = await db.findByIndex<User>('users', 'email', email);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // In a real app, verify the password hash
  // For demo, we'll accept any password matching the email
  const validPasswords: Record<string, string> = {
    'admin@infrasoko.com': 'admin123',
    'client@example.com': 'client123',
    'contractor@example.com': 'contractor123',
    'consultant@example.com': 'consultant123',
  };

  if (password !== validPasswords[email]) {
    throw new Error('Invalid credentials');
  }

  // Generate and store token
  const token = generateToken(user);
  localStorage.setItem(AUTH_TOKEN_KEY, token);

  return user;
}

export async function signOut(): Promise<void> {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export async function getCurrentUser(): Promise<User | null> {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (!token) return null;

  try {
    return await getUserFromToken(token);
  } catch (error) {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    return null;
  }
}