// ... existing types ...

export type UserRole = 'client' | 'contractor' | 'consultant';
export type AccessLevel = 'view' | 'edit' | 'approve' | 'admin';

export type UserProfile = {
  user_id: string;
  company_name: string | null;
  contact_number: string | null;
  profile_picture_url: string | null;
  user_role: UserRole;
  access_level: AccessLevel;
  created_at: string;
  updated_at: string;
};

export type RegisterFormData = {
  email: string;
  password: string;
  full_name: string;
  company_name: string;
  contact_number: string;
  user_role: UserRole;
  profile_picture_url?: string;
};