/*
  # Create test user

  1. Changes
    - Insert a test admin user into auth.users
    - Create corresponding user profile in users table
  
  2. Test User Credentials
    - Email: admin@example.com
    - Password: admin123
*/

-- Create test user in auth.users
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  role,
  aud,
  confirmation_token
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  '00000000-0000-0000-0000-000000000000',
  'admin@example.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now(),
  'authenticated',
  'authenticated',
  ''
);

-- Create corresponding user profile
INSERT INTO users (
  id,
  full_name,
  role,
  department
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  'Admin User',
  'admin',
  'Management'
);