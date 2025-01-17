import { User } from '../types';

// Mock users data
const users: User[] = [
  {
    id: '1',
    full_name: 'Admin User',
    role: 'admin',
    email: 'admin@infrasoko.com',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    full_name: 'John Client',
    role: 'client',
    email: 'client@example.com',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    full_name: 'Sarah Contractor',
    role: 'contractor',
    email: 'contractor@example.com',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    full_name: 'Mike Consultant',
    role: 'consultant',
    email: 'consultant@example.com',
    created_at: new Date().toISOString(),
  },
];

// Mock credentials
const credentials = [
  { email: 'admin@infrasoko.com', password: 'admin123', userId: '1' },
  { email: 'client@example.com', password: 'client123', userId: '2' },
  { email: 'contractor@example.com', password: 'contractor123', userId: '3' },
  { email: 'consultant@example.com', password: 'consultant123', userId: '4' },
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