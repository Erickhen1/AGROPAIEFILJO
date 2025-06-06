
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://svwxizzucjudenzkrjmd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2d3hpenp1Y2p1ZGVuemtyam1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDU2MzksImV4cCI6MjA2NDYyMTYzOX0.QozUlBtV9Vp7t7Di6DbxXz6-IkTtDfWUtmWfi4sG0kw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
