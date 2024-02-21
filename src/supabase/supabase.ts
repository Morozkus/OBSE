import { createClient } from '@supabase/supabase-js'


const PROJECT_URL = 'https://irdaetaxgfyhclkufjjk.supabase.co'
const PROJECT_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZGFldGF4Z2Z5aGNsa3VmamprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyOTQxMTIsImV4cCI6MjAyMjg3MDExMn0.TAg2sAMCu4tSFsRSFTdiz-b81aEGerZMW4t8-bDuBco'

const supabase = createClient(PROJECT_URL, PROJECT_API_KEY)
export default supabase