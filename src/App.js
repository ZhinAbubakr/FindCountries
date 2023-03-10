import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import FilterSection from "./components/FilterSection/FilterSection";

let COUNTRIES = [];

function App() {
  const [loading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentCountries, setCurrentCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://restcountries.com/v2/all").then((res) => {
      COUNTRIES = res.data;
      setCurrentCountries(COUNTRIES);
      setIsLoading(false);
    });
  }, []);

  const handleRegionChange = (e) => {
    setInputValue("");
    const countriesCopy = [...COUNTRIES];
    const filteredCountry = countriesCopy.filter(
      (country) => country.region === e.target.value
    );
    setCurrentCountries(filteredCountry);
    setRegion(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setRegion("");
    const countriesCopy = [...COUNTRIES];
    const result = countriesCopy.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCurrentCountries(result);
  };
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <FilterSection
                region={region}
                onRegionChange={(region) => handleRegionChange(region)}
                inputValue={inputValue}
                onInputChange={handleInputChange}
              />
              <Countries
                selectedRegion={region}
                loading={loading}
                countriesData={currentCountries}
              />
            </>
          }
        />
        <Route path="/countries/:name" element={<CountryDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
