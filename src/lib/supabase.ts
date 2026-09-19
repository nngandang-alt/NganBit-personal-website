import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kmpkqywlycgsbwsmauqk.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttcGtxeXdseWNnc2J3c21hdXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4MTg1NjksImV4cCI6MjEwNTM5NDU2OX0.L0p6Np8ywn26Fm18eBdzUpUyZLrjvxLT1BKF6rnUonc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactMessage {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  organization?: string;
  topic?: string;
  message: string;
  status?: string;
}
