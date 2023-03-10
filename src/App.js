import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import FilterSection from "./components/FilterSection/FilterSection";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <FilterSection />
              <Countries />
            </>
          }
        />
        <Route path="/countries/:name" element={<CountryDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
