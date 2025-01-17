/*
  # Enhanced User Management Schema

  1. New Tables
    - `user_profiles`
      - `user_id` (uuid, references auth.users)
      - `company_name` (text)
      - `contact_number` (text)
      - `profile_picture_url` (text)
      - `user_role` (text)
      - `access_level` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on new tables
    - Add policies for user profile access
*/

-- Create enum types for roles and access levels
CREATE TYPE user_role_type AS ENUM ('client', 'contractor', 'consultant');
CREATE TYPE access_level_type AS ENUM ('view', 'edit', 'approve', 'admin');

-- Create user profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name TEXT,
  contact_number TEXT,
  profile_picture_url TEXT,
  user_role user_role_type NOT NULL,
  access_level access_level_type NOT NULL DEFAULT 'view',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
  ON user_profiles
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Create function to handle profile updates
CREATE OR REPLACE FUNCTION handle_user_profile_updated()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER user_profile_updated
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_user_profile_updated();

-- Create function to automatically create user profile
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (user_id, user_role, access_level)
  VALUES (NEW.id, 'client', 'view');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for new users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();