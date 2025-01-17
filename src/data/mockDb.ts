import { User } from '../types';

// Mock users data
const users: User[] = [
  {
    id: '1',
    full_name: 'Admin User',
    role: 'admin',
    department: 'Management',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    full_name: 'Project Manager',
    role: 'manager',
    department: 'Engineering',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Mock credentials
const credentials = [
  { email: 'admin@example.com', password: 'admin123', userId: '1' },
  { email: 'manager@example.com', password: 'manager123', userId: '2' },
];

export const mockDb = {
  auth: {
    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      const user = credentials.find(
        (u) => u.email === email && u.password === password
      );
      
      if (!user) {
        throw new Error('Invalid login credentials');
      }

      const userData = users.find((u) => u.id === user.userId);
      return { data: { user: userData }, error: null };
    },
    signOut: async () => {
      return { error: null };
    },
    onAuthStateChange: (callback: (event: string, session: any) => void) => {
      // Simulate no active session initially
      callback('SIGNED_OUT', null);
      return {
        data: { subscription: { unsubscribe: () => {} } }
      };
    }
  }
};