// config.js

const SUPABASE_URL = "https://zherltvxobfntipbfzxq.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_ZyhQXvFM882k5JbQolgKTw_g5JvsMQs";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
