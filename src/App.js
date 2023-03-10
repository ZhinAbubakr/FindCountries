import { Route, Routes } from "react-router";
import axios from "axios";
import Layout from "./components/Layout/Layout";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import FilterSection from "./components/FilterSection/FilterSection";
import { useEffect, useState } from "react";

let COUNTRIES = [];

function App() {
  const [loading, setIsLoading] = useState(false);
  const [currentCountries, setCurrentCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://restcountries.com/v2/all").then((res) => {
      COUNTRIES = res.data;
      setCurrentCountries(COUNTRIES);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <FilterSection />
              <Countries loading={loading} countriesData={currentCountries} />
            </>
          }
        />
        <Route path="/countries/:name" element={<CountryDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
