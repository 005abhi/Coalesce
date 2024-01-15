
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ylycwhkvlkbhmlyervwm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlseWN3aGt2bGtiaG1seWVydndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNTcwNjgsImV4cCI6MjAyMDczMzA2OH0.EtIeLhiG8FxmFLJ8BlOf2ITftF6mpatEjtHBViol8IY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase