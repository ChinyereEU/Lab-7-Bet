import {createClient} from '@supabase/supabase-js';

const URL = 'https://otdrzhqwumgjjdrhploa.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZHJ6aHF3dW1nampkcmhwbG9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MDgyNDEsImV4cCI6MjA0NjI4NDI0MX0.peDRMjn-IWn-Jvj41ax1k7b_d9fmCqVeWRbK45B_aCA';

export const supabase = createClient(URL, API_KEY);