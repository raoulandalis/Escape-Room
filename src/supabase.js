// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jnyuyvkqofzmpobqqcff.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueXV5dmtxb2Z6bXBvYnFxY2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzOTgwOTgsImV4cCI6MjAzMzk3NDA5OH0.IqrK210Trv8s2lrel9Roi2FojlpL8Mosc4S1nR0DEos"

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
