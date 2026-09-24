const SUPABASE_URL = "https://ibhncikvhjugespcwqzw.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_TmBN2znoVd0kfOapiQASmQ_T7gGSMIs";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
