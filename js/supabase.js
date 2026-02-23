const SUPABASE_URL = 'https://ksgjqhpzkuaqjabokiax.supabase.co';
const SUPABASE_KEY = 'TU_ANON_KEY_AQUI'; // ← Reemplaza con tu key real

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
document.head.appendChild(script);

let supabase;
script.onload = () => {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('✅ Supabase conectado');
    window.dispatchEvent(new Event('supabase-ready'));
};