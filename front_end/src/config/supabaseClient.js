
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ylycwhkvlkbhmlyervwm.supabase.co'
const supabaseKey = process.env.ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase