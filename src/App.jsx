import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://jnyuyvkqofzmpobqqcff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueXV5dmtxb2Z6bXBvYnFxY2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzOTgwOTgsImV4cCI6MjAzMzk3NDA5OH0.IqrK210Trv8s2lrel9Roi2FojlpL8Mosc4S1nR0DEos");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
