import { useParams, useNavigate } from "react-router";
import {
  Typography,
  Box,
  Stack,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useFetch from "../../hooks/useFetch";
const CountryDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const { data: countryInfo, loading } = useFetch(
    `https://restcountries.com/v2/name/${name}`
  );
  let countryPage;

  const currencies = countryInfo.currencies?.map((currency) => (
    <span key={currency.name}>{currency.name},</span>
  ));

  const borderCountries = countryInfo.borders?.map((border) => (
    <Paper
      key={border}
      variant="elevation"
      component="span"
      sx={{
        margin: "5px",
        padding: "5px 10px",
      }}
    >
      {border}
    </Paper>
  ));

  const languages = countryInfo.languages?.map((language) => (
    <span key={language.name}>{language.name},</span>
  ));

  countryPage = (
    <Box
      sx={{
        padding: "30px 8%",
        height: "80vh",
      }}
    >
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        startIcon={<ArrowBackIcon />}
      >
        go back
      </Button>

      <Stack
        mt={10}
        spacing={10}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <img
            src={countryInfo.flag}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography variant="h5">{countryInfo.name}</Typography>
          <Stack
            sx={{ width: "80%" }}
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
            alignItems={{ md: "flex-start" }}
          >
            <Box>
              <Typography variant="subtitle2">
                <b>Native Name:</b> {countryInfo.nativeName}
              </Typography>
              <Typography variant="subtitle2">
                <b>Population:</b> {countryInfo.population}
              </Typography>
              <Typography variant="subtitle2">
                <b>Region:</b> {countryInfo.region}
              </Typography>
              <Typography variant="subtitle2">
                <b>Subregion:</b> {countryInfo.subregion}
              </Typography>
              <Typography variant="subtitle2">
                <b>Capital:</b> {countryInfo.capital}
              </Typography>
            </Box>

            <Box sx={{ marginTop: 5, marginBottom: 5 }}>
              <Typography variant="subtitle2">
                <b>Top Level Domain:</b> {countryInfo.topLevelDomain}
              </Typography>
              <Typography variant="subtitle2">
                <b>Currencies:</b> {currencies}
              </Typography>
              <Typography variant="subtitle2">
                <b>Languages:</b> {languages}
              </Typography>
            </Box>
          </Stack>

          {borderCountries ? (
            <Box>
              <Typography variant="h5">Border Countries:</Typography>
              <Stack direction="row" flexWrap="wrap">
                {borderCountries}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Stack>
    </Box>
  );

  if (loading) {
    countryPage = (
      <div
        style={{
          display: loading ? "flex" : "none",
          width: "100%",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return countryPage;
};

export default CountryDetails;
