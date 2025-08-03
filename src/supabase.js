import { createClient } from "@supabase/supabase-js";

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a fallback client if env vars are not available
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    console.warn(
      "Supabase environment variables not found. Some features may not work."
    );
    // Return a mock client for development
    return {
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () =>
          Promise.resolve({
            data: null,
            error: new Error("Supabase not configured"),
          }),
        update: () =>
          Promise.resolve({
            data: null,
            error: new Error("Supabase not configured"),
          }),
        delete: () =>
          Promise.resolve({
            data: null,
            error: new Error("Supabase not configured"),
          }),
      }),
      channel: () => ({
        on: () => ({ subscribe: () => Promise.resolve() }),
        subscribe: () => Promise.resolve(),
      }),
    };
  }

  return createClient(supabaseUrl, supabaseKey);
};

export const supabase = createSupabaseClient();
